import React, { FC } from "react";

import { DOCS_CODELINE_CLASS } from "../utils";

import DocsTitle from "./DocsTitle";

interface ILocalizableProperty {
  name: string;
  type: string;
}

export interface IDocsLocale {
  localizableProps?: ILocalizableProperty[];
}

const DocsLocale: FC<IDocsLocale> = ({ localizableProps }) => {
  if (!localizableProps) {
    return null;
  }

  return (
    <div>
      <DocsTitle text="Intl" subtitle />
      <p>
        This component supports localization of its properties, using the{" "}
        <code className={DOCS_CODELINE_CLASS}>localized</code> boolean property.
        <br />
        When setting <code className={DOCS_CODELINE_CLASS}>localized = true</code> all the localizable props will be
        localized using their value as id for{" "}
        <code className={DOCS_CODELINE_CLASS}>{`intl.formatMessage({ id: 'property-value'})`}</code>.
      </p>
      <b>Localizable props:</b>
      <ul>
        {localizableProps.map(({ name, type }, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <p>
        <u>Important!</u>
        <br />
        If one of the properties above is an array of strings or object, all the values for that path will get
        localized.
      </p>
    </div>
  );
};

export default DocsLocale;
