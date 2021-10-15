import React, { FC } from "react";

import { DOCS_TITLE_CLASS } from "../utils";

interface IDocsTitle {
  text: string;
  subtitle?: boolean;
}

const DocsTitle: FC<IDocsTitle> = ({ subtitle = false, text }) => {
  return subtitle ? <h3 className={DOCS_TITLE_CLASS}>{text}</h3> : <h2 className={DOCS_TITLE_CLASS}>{text}</h2>;
};

export default DocsTitle;
