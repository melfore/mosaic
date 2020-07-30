import React, { FC, Fragment, ReactElement } from "react";
import { DOCUMENTATION_BODY_CLASS, DOCUMENTATION_TITLE_CLASS } from "./index";

interface CustomDocsTitleType {
  title: string;
  subtitle?: boolean;
}

export const CustomDocsTitle: FC<CustomDocsTitleType> = ({ subtitle = false, title }) => {
  return subtitle ? (
    <h3 className={DOCUMENTATION_TITLE_CLASS}>{title}</h3>
  ) : (
    <h2 className={DOCUMENTATION_TITLE_CLASS}>{title}</h2>
  );
};

interface CustomDocsBlockType {
  body: ReactElement;
  subtitle?: boolean;
  title: string;
}

export const CustomDocsBlock: FC<CustomDocsBlockType> = ({ body, subtitle, title }) => {
  return (
    <Fragment>
      <CustomDocsTitle subtitle={subtitle} title={title} />
      <div className={DOCUMENTATION_BODY_CLASS}>{body}</div>
    </Fragment>
  );
};
