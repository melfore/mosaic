import React, { FC } from "react";
import { CUSTOM_TITLES_CLASS } from "./utils";

interface IDocumentationTitle {
  text: string;
  subtitle?: boolean;
}

const DocumentationTitle: FC<IDocumentationTitle> = ({ subtitle = false, text }) => {
  return subtitle ? <h3 className={CUSTOM_TITLES_CLASS}>{text}</h3> : <h2 className={CUSTOM_TITLES_CLASS}>{text}</h2>;
};

export default DocumentationTitle;
