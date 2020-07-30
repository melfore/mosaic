import React, { ReactElement, FC, Fragment } from "react";
import DocumentationPage from "./DocumentationPage";
import { ILocalizableProperty } from "../hocs/localized";

export const DOCUMENTATION_BODY_CLASS = "mosaic-documentation-body";
export const DOCUMENTATION_CODE_BLOCK_CLASS = "mosaic-documentation-code-block";
export const DOCUMENTATION_TITLE_CLASS = "mosaic-documentation-title";

export const DOCS_PAGE_STYLE: string = `
  .${DOCUMENTATION_BODY_CLASS},
  .${DOCUMENTATION_TITLE_CLASS} {
    color: #333333 !important;
    font-family: Arial !important;
    cursor: text;
  }
  .${DOCUMENTATION_BODY_CLASS} {
    font-size: 14px;
    line-height: 24px;
  }
  .${DOCUMENTATION_TITLE_CLASS} {
    margin: 20px 0 8px;
    padding: 0;
    position: relative;
  }
  h2.${DOCUMENTATION_TITLE_CLASS} {
    border-bottom: 1px solid rgba(0,0,0,.1);
    font-size: 24px;
    padding-bottom: 4px;
  }
  h3.${DOCUMENTATION_TITLE_CLASS} {
    font-size: 20px;
  }
  .${DOCUMENTATION_BODY_CLASS} code {
    background-color: #F8F8F8;
    font-family: "Operator Mono","Fira Code Retina","Fira Code","FiraCode-Retina","Andale Mono","Lucida Console",Consolas,Monaco,monospace;
    font-size: 13px;
    padding: 4px;
  }
  .${DOCUMENTATION_BODY_CLASS} code.${DOCUMENTATION_CODE_BLOCK_CLASS} {
    background-color: #262626;
    color: #EDEDED;
    display: flex;
    padding: 8px;
    white-space: pre-line;
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

interface IDocumentationPage {
  basedOn?: string;
  component: string;
  e2eTestInfo: {
    dataCyDefault: string;
    dataCyShortcut?: string;
    usesClass?: boolean;
  };
  localizableProps?: ILocalizableProperty[];
}

interface IDocumentationStructure {
  docs: {
    page: () => ReactElement;
  };
}

export const getDocumentationPage = (options: IDocumentationPage): IDocumentationStructure => ({
  docs: {
    page: () => <DocumentationPage {...options} />,
  },
});

export const StoriesWrapper: FC = ({ children }) => (
  <Fragment>
    <div className="stories-wrapper">{children}</div>
  </Fragment>
);
