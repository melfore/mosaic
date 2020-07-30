import React, { Fragment } from "react";
import { DOCUMENTATION_CODE_BLOCK_CLASS } from ".";

export const INVALID_COMPONENT_BLOCKS_ERROR = `
You are passing component blocks in your story page.
Please fix the error at "getDocsPageStructure()" method in your story file.
`;

export const MISSING_COMPONENT_NAME_ERROR = `
You forgot to pass component name in your story page.
Please fix the error adding the component name as first parameter for "getDocsPageStructure()" method in your story file.
`;

export const DEFAULT_BLOCKS_KEYS = {
  CANVAS: "canvas",
  INTL: "intl",
  USAGE: "usage",
};

export const DEFAULT_BLOCKS = (component: string) => ({
  [DEFAULT_BLOCKS_KEYS.USAGE]: {
    title: "Usage",
    subtitle: true,
    body: (
      <Fragment>
        <p>
          Import <code>{component}</code> component adding this line to your code:
        </p>
        <code className={DOCUMENTATION_CODE_BLOCK_CLASS}>{`import { ${component} } from "@melfore/mosaic";`}</code>
        <p>
          For detailed usage and props settings please refer to the <strong>Canvas</strong>, <strong>Stories</strong> or{" "}
          <strong>Props</strong> sections of this page.
        </p>
      </Fragment>
    ),
  },
  [DEFAULT_BLOCKS_KEYS.INTL]: {
    title: "Support for react-intl",
    subtitle: true,
    body: (
      <Fragment>
        <p>
          Supports usage inside <code>IntlProvider</code> context of <code>react-intl</code> using{" "}
          <code>TypographyIntl</code> exported version.
          <br />
          You can import it adding this line to your code:
        </p>
        <code className={DOCUMENTATION_CODE_BLOCK_CLASS}>{`import { ${component}Intl } from "melfore/mosaic";`}</code>
        <p>
          Instead of passing <code>label</code> prop, provide <code>labelId</code> prop with the key-string to translate
          and it will automatically translate it.
          <br />
          For more details please refer to the example shown in the <strong>Stories/With Intl</strong> story.
        </p>
      </Fragment>
    ),
  },
  [DEFAULT_BLOCKS_KEYS.CANVAS]: {
    title: "Canvas",
    subtitle: true,
    body: (
      <Fragment>
        <p>
          The following story shows a working example (sometimes mocking external functionalities) and lists all
          available props for the component using <code>@storybook/addon-knobs</code>. Click on the{" "}
          <strong>Show Code</strong> button to discover them all.
        </p>
        <p>
          For specific usages and props combinations, please refer to the <strong>Stories</strong> and{" "}
          <strong>Props</strong> sections of this page.
        </p>
      </Fragment>
    ),
  },
});
