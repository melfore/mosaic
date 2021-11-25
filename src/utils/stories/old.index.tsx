import React, { FC, Fragment } from "react";

export const StoriesWrapper: FC = ({ children }) => (
  <Fragment>
    <div className="stories-wrapper">{children}</div>
  </Fragment>
);
