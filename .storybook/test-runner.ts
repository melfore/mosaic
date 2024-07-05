import { TestRunnerConfig, getStoryContext } from "@storybook/test-runner";
import { StoryContextForEnhancers } from "@storybook/types";
import { existsSync, readFileSync, writeFileSync } from "fs";

type WithCode = {
  code: string;
};

type Props = {
  name: string;
  description?: string;
  required: boolean;
  type: string;
  values?: string[];
};

type Info = Partial<WithCode> & {
  props: Props[];
};

type Example = WithCode & {
  source: string;
};

type ComponentData = {
  name: string;
  description: string;
  extension: "tsx";
  docs: {
    import: WithCode;
    info: Info;
    examples: Example[];
  };
};

const DATABASE_FILE = "data/components.json";

/**
 * Gets component title name from story ctx
 */
const getComponentTitle = (title: string) => {
  const parts = title.split("/");
  return parts[parts.length - 1];
};

/**
 * Gets required and type info for all properties of component from story ctx
 * @param sbType the storybook proprietary type of the component
 */
const getPropertyType = (sbType?: any): { required: boolean; type: string } => {
  if (!sbType) {
    return { required: false, type: "any" };
  }

  const { name, required } = sbType;
  let type = sbType.name;
  if (type === "other" || type === "function") {
    type = sbType.value;
  }

  return { required, type };
};

/**
 * Gets properties values from story ctx creating list of unique values
 * @param sbOptions the storybook proprietary options of the component
 */
const getPropertyValues = (sbOptions?: readonly any[]) => {
  if (!sbOptions || !sbOptions.length) {
    return undefined;
  }

  let options: string[] = [];
  sbOptions.forEach((option) => {
    if (!options.includes(option)) {
      options.push(option);
    }
  });

  return options;
};

/**
 * Gets all component props from story ctx argTypes
 * @param argTypes the object with all argTypes of the component
 */
const getComponentProps = (argTypes: StoryContextForEnhancers["argTypes"]) =>
  Object.values(argTypes).map(({ name, description, type: sbType, options }): Props => {
    const { required, type } = getPropertyType(sbType);
    const values = getPropertyValues(options);

    return { name, description, required, type, values };
  });

const config: TestRunnerConfig = {
  async setup() {
    const databaseFile = DATABASE_FILE;
    if (!existsSync(databaseFile)) {
      writeFileSync(databaseFile, JSON.stringify([], null, 2));
    }
  },
  async postVisit(page, context) {
    const databaseFileContent = readFileSync(DATABASE_FILE, "utf-8");
    let database = JSON.parse(databaseFileContent) as ComponentData[];

    const storyContext = await getStoryContext(page, context);
    const { parameters } = await getStoryContext(page, context);
    const { id, title, componentId } = storyContext;
    const componentName = getComponentTitle(title);
    const example: Example = { source: id, code: id };

    const componentIsMapped = database.find(({ name }) => name === componentName);
    if (!componentIsMapped) {
      // TODO: add support for other components and remove this check
      if (componentId === "inputs-checkbox") {
        const { argTypes, parameters } = storyContext;
        const props = getComponentProps(argTypes);

        // TODO: add support for other stories and remove this check
        if (id === "inputs-checkbox--primary") {
          const { parameters } = await getStoryContext(page, context);
          console.log(parameters.docs.source.originalSource);
        }

        database = [
          ...database,
          {
            name: componentName,
            description: `${componentName} description`,
            extension: "tsx",
            docs: {
              examples: [example],
              import: { code: `import { ${componentName} } from "@melfore/mosaic";` },
              info: { props },
            },
          },
        ];
      }
    } else {
      database = database.map((component) => {
        if (component.name !== componentName) {
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

    writeFileSync(DATABASE_FILE, JSON.stringify(database, null, 2));

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
