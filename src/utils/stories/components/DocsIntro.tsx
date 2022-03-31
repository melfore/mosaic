import React, { FC } from "react";
import { Tooltip } from "@mui/material";
import { Title } from "@storybook/addon-docs";

import { Icon, Icons, IconSize, Spacer } from "../../..";
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
      <span style={{ alignItems: "center", display: "flex" }}>
        <Title />
        <Spacer level={3} />
        {localizable && (
          <Tooltip placement="top" title="Localizable">
            <span>
              <Icon name={Icons.language} size={IconSize.small} />
            </span>
          </Tooltip>
        )}
        <Spacer />
        {testable && (
          <Tooltip placement="top" title="Testable">
            <span>
              <Icon name={Icons.search} size={IconSize.small} />
            </span>
          </Tooltip>
        )}
      </span>
      {basedOn && (
        <p>
          This component is based on:{" "}
          <a href={basedOn.url} rel="noreferrer" target="_blank">
            <code className={DOCS_CODELINE_CLASS}>{basedOn.label}</code>
          </a>
        </p>
      )}
      <code className={DOCS_CODEBLOCK_CLASS}>{`import { ${component} } from "@melfore/mosaic";`}</code>
    </div>
  );
};

export default DocsIntro;
