import React, { FC, Fragment, PropsWithChildren } from "react";

export const StoriesWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Fragment>
    <div className="stories-wrapper">{children}</div>
  </Fragment>
);
