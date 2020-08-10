import React, { FC } from "react";

import { DOCUMENTATION_TITLE_CLASS } from ".";

interface IDocumentationTitle {
  text: string;
  subtitle?: boolean;
}

const DocumentationTitle: FC<IDocumentationTitle> = ({ subtitle = false, text }) => {
  return subtitle ? (
    <h3 className={DOCUMENTATION_TITLE_CLASS}>{text}</h3>
  ) : (
    <h2 className={DOCUMENTATION_TITLE_CLASS}>{text}</h2>
  );
};

export default DocumentationTitle;
