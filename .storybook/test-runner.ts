import { getStoryContext, TestHook, TestRunnerConfig } from "@storybook/test-runner";
import {
  waitFor,
  SBStory,
  initDatabase,
  getDatabase,
  getComponentTitle,
  parseStory,
  getComponentProps,
  writeDatabase,
  getComponentDescription,
  getComponentImport,
} from "./utils";

// TODO@luciob: move this to an environment variable
const ENABLE_COMPONENTS_DATABASE = false;
let storySourceData: SBStory;

/**
 * Extracts storybook data from currently processed story
 * @param page puppeteer page (see playwright)
 */
const getStorybookStoryData: TestHook = async (page) => {
  page
    .evaluate<SBStory>(() => {
      return new Promise((resolve, reject) => {
        const channel = globalThis.__STORYBOOK_ADDONS_CHANNEL__;
        channel.on("@storybook/core/docs/snippet-rendered", (data: SBStory) => resolve(data));
      });
    })
    .then((data) => {
      storySourceData = data;
    });
};

const writeStoryDataToDB: TestHook = async (page, context) => {
  let database = getDatabase();
  const { argTypes, parameters, title } = await getStoryContext(page, context);
  const name = getComponentTitle(title);
  const exampleSourceData = await waitFor(() => storySourceData);
  const example = parseStory(exampleSourceData);
  const componentIsMapped = database.find(({ name: dbName }) => dbName === name);
  if (!componentIsMapped) {
    const description = getComponentDescription(name, parameters);
    const importCode = getComponentImport(name);
    const props = getComponentProps(argTypes);
    database = [
      // @ts-ignore
      ...database,
      {
        name,
        description,
        docs_path: "",
        extension: "tsx",
        docs: {
          import: importCode,
          // @ts-ignore
          props,
          examples: [example],
        },
      },
    ];
  } else {
    database = database.map((component) => {
      if (component.name !== name) {
        return component;
      }
      return {
        ...component,
        docs: {
          ...component.docs,
          examples: [...component.docs.examples, example],
        },
      };
    });
  }

  writeDatabase(database);
};

/**
 * Gets story element handler and extracts innerHTML to generate snapshots
 * @param page puppeteer page (see playwright)
 */
const validateSnapshot: TestHook = async (page, context) => {
  const { title } = await getStoryContext(page, context);
  const name = getComponentTitle(title);
  // Exclude TableVirtualized from snapshot validation
  if (name === "TableVirtualized") {
    return;
  }

  const elementHandler = await page.$("#storybook-root");
  if (!elementHandler) {
    return;
  }

  const innerHTML = await elementHandler.innerHTML();
  // @ts-ignore
  expect(innerHTML).toMatchSnapshot();
};

// Util to be used for logging inside page.evaluate
// declare global {
//   var logToPage: (message: string) => Promise<void>;
// }

const config: TestRunnerConfig = {
  async setup() {
    if (ENABLE_COMPONENTS_DATABASE) {
      initDatabase();
    }
  },
  async preVisit(page, context) {
    if (ENABLE_COMPONENTS_DATABASE) {
      await getStorybookStoryData(page, context);
    }
  },
  async postVisit(page, context) {
    if (ENABLE_COMPONENTS_DATABASE) {
      await writeStoryDataToDB(page, context);
    }

    await validateSnapshot(page, context);
  },
};

export default config;
