import { getStoryContext, TestRunnerConfig } from "@storybook/test-runner";
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

// Util to be used for logging inside page.evaluate
// declare global {
//   var logToPage: (message: string) => Promise<void>;
// }

let storySourceData: SBStory;

const config: TestRunnerConfig = {
  async setup() {
    initDatabase();
  },
  async preVisit(page) {
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
  },
  async postVisit(page, context) {
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
        ...database,
        {
          name,
          description,
          docs_path: "",
          extension: "tsx",
          docs: {
            import: importCode,
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
  },
};

export default config;
