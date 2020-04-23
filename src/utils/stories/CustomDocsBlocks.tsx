import React, { FC, Fragment, ReactElement } from "react";
import { CUSTOM_BODY_CLASS, CUSTOM_TITLES_CLASS } from "./utils";

interface CustomDocsTitleType {
  title: string;
  subtitle?: boolean;
}

export const CustomDocsTitle: FC<CustomDocsTitleType> = ({ subtitle = false, title }) => {
  return subtitle ? <h3 className={CUSTOM_TITLES_CLASS}>{title}</h3> : <h2 className={CUSTOM_TITLES_CLASS}>{title}</h2>;
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
      <div className={CUSTOM_BODY_CLASS}>{body}</div>
    </Fragment>
  );
};
