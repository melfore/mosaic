import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";

import { SwitchSize } from "../../types/Switch";
import { getAllComposedDataCy } from "../../utils";
import FormMock from "../../utils/mocks/FormMock";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";

import Switch, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

export default {
  title: "Switch",
  component: Switch,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/Switch",
      component: "Switch",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
        dataCyShortcut: DATA_CY_SHORTCUT,
        subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
      },
      localizableProps: LOCALIZABLE_PROPS,
    }),
  },
};

export const Canvas = () => (
  // FormMock simulates external form component handling state
  // In a real case scenario "onChange" and "value" props must be passed to Switch
  <FormMock inputValue={boolean("value", true)} onInputChange={action("Change switch")}>
    <Switch
      dataCy={text("data-cy", "switch")}
      label={text("label", "Switch")}
      labelPlacement={select("labelPlacement", ["end", "start"], "start")}
      onChange={action("Change switch")}
      value={boolean("value", true)}
    />
  </FormMock>
);

export const CustomStyle = () => <Switch style={{ color: "red" }} value />;

export const Disabled = () => (
  <StoriesWrapper>
    <Switch disabled />
    <Switch value disabled />
  </StoriesWrapper>
);

export const Label = () => (
  <StoriesWrapper>
    <Switch label="Switch" />
    <Switch label="Switch" labelPlacement="end" value />
  </StoriesWrapper>
);

export const Localized = () => (
  // IntlProviderMock simulates external IntlProvider context
  <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
    <Switch label={MessageMock.switch} localized />
  </IntlProviderMock>
);

export const Size = () => (
  <StoriesWrapper>
    <Switch value />
    <Switch value size={SwitchSize.small} />
    <Switch />
    <Switch size={SwitchSize.small} />
  </StoriesWrapper>
);

export const Values = () => (
  <StoriesWrapper>
    <Switch onChange={() => {}} />
    <Switch value onChange={() => {}} />
  </StoriesWrapper>
);
