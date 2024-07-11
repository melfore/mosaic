import { existsSync, readFileSync, writeFileSync } from "fs";
import { StoryContextForEnhancers } from "@storybook/types";

type Snippet = {
  code: string;
};

type Prop = {
  name: string;
  description?: string;
  required: boolean;
  type: string;
  values?: any[];
};

export type SBStory = {
  id: string;
  args: Record<string, any>;
  source: string;
};

export type Story = {
  name: string;
  props: Record<string, any>;
} & Snippet;

export type Component = {
  name: string;
  description: string;
  docs_path: string;
  extension: "tsx";
  docs: {
    import: Snippet;
    props: Prop[];
    examples: Story[];
  };
};

type StoryResolver = (story: Story | PromiseLike<Story>) => void;

const CONDITION_RECHECK_INTERVAL_MS = 100;
const CONDITION_OVERALL_TIMEOUT_MS = 2000;

const DATABASE_FILE = "data/components.json";

/**
 * Initializes the database file if it doesn't exist
 */
export const initDatabase = () => {
  if (!existsSync(DATABASE_FILE)) {
    writeFileSync(DATABASE_FILE, JSON.stringify([], null, 2));
  }
};

/**
 * Get the database from the database file
 */
export const getDatabase = (): Component[] => {
  const databaseFileContent = readFileSync(DATABASE_FILE, "utf-8");
  return JSON.parse(databaseFileContent) as Component[];
};

/**
 * Write the database to the database file
 * @param database the updated database to write
 */
export const writeDatabase = (database: Component[]) => {
  writeFileSync(DATABASE_FILE, JSON.stringify(database, null, 2));
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
export const getComponentProps = (argTypes: StoryContextForEnhancers["argTypes"]) =>
  Object.values(argTypes).map(({ name, description, type: sbType, options }): Prop => {
    const { required, type } = getPropertyType(sbType);
    const values = getPropertyValues(options);

    return { name, description, required, type, values };
  });

/**
 * Gets component title name from story ctx
 */
export const getComponentTitle = (title: string) => {
  const parts = title.split("/");
  return parts[parts.length - 1];
};

/**
 * Gets component description from story ctx parameters
 */
export const getComponentDescription = (name: string, parameters: any) =>
  parameters.docs?.description?.component || `${name} description`;

/**
 * Gets component import
 */
export const getComponentImport = (name: string): Snippet => {
  const code = `import { ${name} } from "@melfore/mosaic";`;
  return { code };
};

/**
 * Parse a proprietary StoryBook formatted Story to our internal format
 * @param story the StoryBook formatted story
 */
export const parseStory = ({ args, id, source }: SBStory): Story => {
  const name = id.split("--")[1];
  return {
    name,
    code: source,
    props: args,
  };
};

/**
 * Wait for a condition to be met
 * @param condition the condition to wait for
 */
export const waitFor = async <T>(condition: () => T): Promise<T> => {
  let result = condition();
  let timeout = CONDITION_OVERALL_TIMEOUT_MS;

  while (!result && timeout > 0) {
    await new Promise((resolve) => setTimeout(resolve, CONDITION_RECHECK_INTERVAL_MS));
    result = condition();
    timeout -= CONDITION_RECHECK_INTERVAL_MS;
  }

  if (!result) {
    throw new Error("Timeout exceeded");
  }

  return result;
};
