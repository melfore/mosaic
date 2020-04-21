import React, { Fragment } from "react";
import CustomDocsPage from "./CustomDocsPage";

export const getDocsPageStructure = (name, blocks) => ({
  docs: {
    page: () => <CustomDocsPage blocks={blocks} name={name} />,
  },
});

export const StoriesWrapper = (props) => (
  <Fragment>
    <div className="stories-wrapper">{props.children}</div>
  </Fragment>
);
