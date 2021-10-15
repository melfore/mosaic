import React, { FC } from "react";

import { DATA_CY_SUFFIX_SEPARATOR } from "../..";
import { Spacer, SpacerDirection } from "../../..";
import { DOCS_CODEBLOCK_CLASS, DOCS_CODELINE_CLASS } from "../utils";

import DocsTitle from "./DocsTitle";

interface ISubpartSuffix {
  label: string;
  suffix: string;
}

interface IE2ETestInfo {
  dataCyDefault: string;
  dataCyShortcut?: string;
  subpartsSuffixes?: ISubpartSuffix[];
}

export interface IDocsE2ETestInfo {
  e2eTestInfo: IE2ETestInfo;
}

interface IDocsE2E extends IDocsE2ETestInfo {
  localizable?: boolean;
}

const DocsE2E: FC<IDocsE2E> = ({ e2eTestInfo, localizable = false }) => {
  return (
    <div>
      <DocsTitle text="E2E Testing" />
      <p>
        This component leverages <code className={DOCS_CODELINE_CLASS}>data-cy</code> HTML attribute for e2e testing.
        The reference framework is:&nbsp;
        <a href="https://www.cypress.io" rel="noreferrer" target="_blank">
          cypress.io
        </a>
        <br />
        To set a value for <code className={DOCS_CODELINE_CLASS}>data-cy</code> assign a valid string to{" "}
        <code className={DOCS_CODELINE_CLASS}>dataCy</code> prop (defaults to:{" "}
        <code className={DOCS_CODELINE_CLASS}>"{e2eTestInfo.dataCyDefault}"</code>)
      </p>
      <p>
        <span>
          <u>Example</u> Finding the component:
        </span>
        <code className={DOCS_CODEBLOCK_CLASS}>
          {`cy.get("[data-cy='${e2eTestInfo.dataCyDefault}']"); // Do something with it `}
        </code>
      </p>
      {localizable && e2eTestInfo.dataCyShortcut && (
        <p>
          <u>Important!</u>
          <br />
          When in localized mode <code className={DOCS_CODELINE_CLASS}>data-cy</code> will be defaulted with the value
          of the <code className={DOCS_CODELINE_CLASS}>{e2eTestInfo.dataCyShortcut}</code> property.
        </p>
      )}
      {e2eTestInfo.subpartsSuffixes && (
        <div>
          <p>
            <b>Testing component subparts</b>
            <br />
            There are some component subparts which offer a <code className={DOCS_CODELINE_CLASS}>data-cy</code> HTML
            attribute to retrieve them easily.
          </p>
          <table style={{ textAlign: "left", minWidth: "75%" }}>
            <thead>
              <tr>
                <th>Subpart</th>
                <th>DataCy</th>
              </tr>
            </thead>
            <tbody>
              {e2eTestInfo.subpartsSuffixes.map(({ label, suffix }) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>
                    <code className={DOCS_CODELINE_CLASS}>
                      {`<replace-with-dataCy>${DATA_CY_SUFFIX_SEPARATOR}${suffix}`}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            <span>
              <u>Example</u> Finding the <i>{e2eTestInfo.subpartsSuffixes[0].label}</i> subpart, with{" "}
              <code className={DOCS_CODELINE_CLASS}>dataCy="{e2eTestInfo.dataCyDefault}"</code>
            </span>
            :
            <code className={DOCS_CODEBLOCK_CLASS}>
              {`cy.get("[data-cy='${e2eTestInfo.dataCyDefault}-${e2eTestInfo.subpartsSuffixes[0].suffix}']") // Do something with it`}
            </code>
          </p>
        </div>
      )}
      <Spacer direction={SpacerDirection.vertical} level={3} />
    </div>
  );
};

export default DocsE2E;
