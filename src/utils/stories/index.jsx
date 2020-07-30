import React, { Fragment } from "react";
import CustomDocsPage from "./CustomDocsPage";
import DocumentationPage from "./DocumentationPage";

// TODO#lb: migrate to TS
export const getDocumentationPage = (options) => ({
  docs: {
    page: () => <DocumentationPage {...options} />,
  },
});

export const getDocsPageStructure = (name, intlSupport = true, notes = null) => ({
  docs: {
    page: () => <CustomDocsPage intlSupport={intlSupport} name={name} notes={notes} />,
  },
});

export const StoriesWrapper = (props) => (
  <Fragment>
    <div className="stories-wrapper">{props.children}</div>
  </Fragment>
);
