import React, { FC, ReactElement } from "react";
import { ArgsTable, Primary, PRIMARY_STORY, Stories } from "@storybook/addon-docs";

import DocsE2E, { IDocsE2ETestInfo } from "./components/DocsE2E";
import DocsIntro, { IDocsBasedOn } from "./components/DocsIntro";
import DocsLocale, { IDocsLocale } from "./components/DocsLocale";
import DocsTitle from "./components/DocsTitle";
import { DOCS_BODY_CLASS, DOCS_PAGE_STYLE } from "./utils";

export interface IDocsPage extends IDocsBasedOn, IDocsE2ETestInfo, IDocsLocale {
  component: string;
}

interface IDocsStructure {
  page: () => ReactElement;
}

const DocsPage: FC<IDocsPage> = ({ basedOn, component, e2eTestInfo, localizableProps }) => {
  return (
    <div className={DOCS_BODY_CLASS}>
      <style
        dangerouslySetInnerHTML={{
          __html: DOCS_PAGE_STYLE,
        }}
      />
      {/* Introduction: naming, import */}
      <DocsIntro basedOn={basedOn} component={component} localizable={!!localizableProps} testable={!!e2eTestInfo} />
      {/* Playground: rendering, props */}
      <DocsTitle text="Playground" subtitle />
      <Primary />
      <ArgsTable story={PRIMARY_STORY} />
      {/* Localization */}
      <DocsLocale localizableProps={localizableProps} />
      {/* E2E Tests */}
      <DocsE2E e2eTestInfo={e2eTestInfo} localizable={!!localizableProps} />
      {/* All other stories */}
      <Stories />
    </div>
  );
};

const getDocsPage = (options: IDocsPage): IDocsStructure => ({
  page: () => <DocsPage {...options} />,
});

export default getDocsPage;
