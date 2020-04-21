import React, { Fragment } from "react";

export const INVALID_COMPONENT_BLOCKS_ERROR = `
You are passing component blocks in your story page.
Please fix the error at "getDocsPageStructure()" method in your story file.
`;

export const MISSING_COMPONENT_NAME_ERROR = `
You forgot to pass component name in your story page.
Please fix the error adding the component name as first parameter for "getDocsPageStructure()" method in your story file.
`;

export const DEFAULT_BLOCKS = (component: string) => ({
  usage: {
    title: "Usage",
    subtitle: true,
    body: (
      <Fragment>
        <p>
          Import <code>{component}</code> component adding this line to your code:
        </p>
        <code className={CUSTOM_CODE_BLOCK_CLASS}>{`import { ${component} } from "melfore/mosaic";`}</code>
        <p>
          For detailed usage and props settings please refer to the <strong>Canvas</strong>, <strong>Stories</strong> or{" "}
          <strong>Props</strong> sections of this page.
        </p>
      </Fragment>
    ),
  },
  intl: {
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
        <code className={CUSTOM_CODE_BLOCK_CLASS}>{`import { ${component}Intl } from "melfore/mosaic";`}</code>
        <p>
          Instead of passing <code>label</code> prop, provide <code>labelId</code> prop with the key-string to translate
          and it will automatically translate it.
          <br />
          For more details please refer to the example shown in the <strong>Stories/With Intl</strong> story.
        </p>
      </Fragment>
    ),
  },
  canvas: {
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

export const CUSTOM_BODY_CLASS = "custom-sbdocs-body";
export const CUSTOM_CODE_BLOCK_CLASS = "custom-code-block";
export const CUSTOM_TITLES_CLASS = "custom-sbdocs-title";

export const DOCS_PAGE_STYLE: string = `
  .${CUSTOM_BODY_CLASS},
  .${CUSTOM_TITLES_CLASS} {
    color: #333333 !important;
    font-family: Arial !important;
    cursor: text;
  }
  .${CUSTOM_BODY_CLASS} {
    font-size: 14px;
    line-height: 24px;
  }
  .${CUSTOM_TITLES_CLASS} {
    margin: 20px 0 8px;
    padding: 0;
    position: relative;
  }
  h2.${CUSTOM_TITLES_CLASS} {
    border-bottom: 1px solid rgba(0,0,0,.1);
    font-size: 24px;
    padding-bottom: 4px;
  }
  h3.${CUSTOM_TITLES_CLASS} {
    font-size: 20px;
  }
  .${CUSTOM_BODY_CLASS} code {
    background-color: #F8F8F8;
    font-family: "Operator Mono","Fira Code Retina","Fira Code","FiraCode-Retina","Andale Mono","Lucida Console",Consolas,Monaco,monospace;
    font-size: 13px;
    padding: 4px;
  }
  .${CUSTOM_BODY_CLASS} code.${CUSTOM_CODE_BLOCK_CLASS} {
    background-color: #262626;
    color: #EDEDED;
    display: flex;
    padding: 8px;
  }
  .icon-wrapper {
    align-items: center;
    display: flex;
  }
  .icon-wrapper > span {
    color: #333333 !important;
    font-family: Arial !important;
    font-size: 12px;
    margin-left: 4px;
  }
  .stories-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .stories-wrapper > * {
    margin: 8px;
  }
  .typography-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
