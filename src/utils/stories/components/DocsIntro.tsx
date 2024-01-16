import React, { FC } from "react";
import { Tooltip } from "@mui/material";
import { Title } from "@storybook/addon-docs";

import { Icon, Icons, Spacer } from "../../..";
import { DOCS_CODEBLOCK_CLASS, DOCS_CODELINE_CLASS } from "../utils";

interface IBasedOn {
  label: string;
  url?: string;
}

export interface IDocsBasedOn {
  basedOn?: IBasedOn;
}

interface IDocsIntro extends IDocsBasedOn {
  component: string;
  localizable?: boolean;
  testable?: boolean;
}

const DocsIntro: FC<IDocsIntro> = ({ basedOn, component, localizable = false, testable = false }) => {
  return (
    <div>
      <span style={{ alignItems: "baseline", display: "flex" }}>
        <Title />
        <Spacer level={2} />
        {localizable && (
          <Tooltip placement="top" title="Localizable">
            <span>
              <Icon name={Icons.language} size="small" />
            </span>
          </Tooltip>
        )}
        <Spacer />
        {testable && (
          <Tooltip placement="top" title="Testable">
            <span>
              <Icon name={Icons.search} size="small" />
            </span>
          </Tooltip>
        )}
      </span>
      {basedOn && (
        <>
          <Spacer direction="vertical" />
          <span>
            This component is based on: &nbsp;
            <a href={basedOn.url} rel="noreferrer" target="_blank">
              <code className={DOCS_CODELINE_CLASS}>{basedOn.label}</code>
            </a>
          </span>
        </>
      )}
      <Spacer direction="vertical" />
      <code className={DOCS_CODEBLOCK_CLASS}>{`import { ${component} } from "@melfore/mosaic";`}</code>
      <Spacer direction="vertical" level={3} />
    </div>
  );
};

export default DocsIntro;
