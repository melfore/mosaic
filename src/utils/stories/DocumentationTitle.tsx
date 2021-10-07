import React, { FC } from "react";

import { DOCUMENTATION_TITLE_CLASS } from ".";

interface IDocsTitle {
  text: string;
  subtitle?: boolean;
}

const DocsTitle: FC<IDocsTitle> = ({ subtitle = false, text }) => {
  return subtitle ? (
    <h3 className={DOCUMENTATION_TITLE_CLASS}>{text}</h3>
  ) : (
    <h2 className={DOCUMENTATION_TITLE_CLASS}>{text}</h2>
  );
};

export default DocsTitle;
