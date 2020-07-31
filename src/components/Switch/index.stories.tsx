import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";
import Switch, { DATA_CY_DEFAULT } from ".";
import { SwitchSize } from "../../types/Switch";
import FormMock from "../../utils/mocks/FormMock";

export default {
  title: "Switch",
  component: Switch,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/Switch",
      component: "Switch",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
      },
    }),
  },
};

export const Canvas = () => (
  // FormMock simulates external form component handling state
  // In a real case scenario "onChange" and "value" props must be passed to Switch
  <FormMock inputValue={boolean("value", true)} onInputChange={action("Change switch")}>
    <Switch
      dataCy={text("data-cy", "switch-identifier")}
      value={boolean("value", true)}
      onChange={action("Change switch")}
    />
  </FormMock>
);

export const Values = () => (
  <StoriesWrapper>
    <Switch dataCy={"switch-identifier"} value={false} onChange={() => {}} />
    <Switch dataCy={"switch-identifier"} value={true} onChange={() => {}} />
  </StoriesWrapper>
);

export const Disabled = () => (
  <StoriesWrapper>
    <Switch dataCy={"switch-identifier"} value={false} disabled />
    <Switch dataCy={"switch-identifier"} value={true} disabled />
  </StoriesWrapper>
);

export const Size = () => (
  <StoriesWrapper>
    <Switch dataCy={"switch-identifier"} value={true} />
    <Switch dataCy={"switch-identifier"} value={true} size={SwitchSize.small} />
    <Switch dataCy={"switch-identifier"} value={false} />
    <Switch dataCy={"switch-identifier"} value={false} size={SwitchSize.small} />
  </StoriesWrapper>
);
