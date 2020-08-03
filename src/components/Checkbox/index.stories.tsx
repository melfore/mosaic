import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";

import { CheckboxSize } from "../../types/Checkbox";
import FormMock from "../../utils/mocks/FormMock";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";

import Checkbox, { DATA_CY_DEFAULT } from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/Checkbox",
      component: "Checkbox",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
      },
    }),
  },
};

export const Canvas = () => (
  // FormMock simulates external form component handling state
  // In a real case scenario "onChange" and "value" props must be passed to Checkbox
  <FormMock inputValue={boolean("value", true)} onInputChange={action("Change checkbox")}>
    <Checkbox
      dataCy={text("data-cy", "checkbox")}
      disabled={boolean("disabled", false)}
      intermediate={boolean("intermediate", false)}
      onChange={action("Change checkbox")}
      required={boolean("value", false)}
      size={select("size", CheckboxSize, CheckboxSize.small, CheckboxSize.default)}
      value={boolean("value", true)}
    />
  </FormMock>
);

export const Disabled = () => (
  <StoriesWrapper>
    <Checkbox dataCy={"checkbox"} value={false} disabled />
    <Checkbox dataCy={"checkbox"} value={true} disabled />
    <Checkbox dataCy={"checkbox"} intermediate disabled />
  </StoriesWrapper>
);

export const Size = () => (
  <StoriesWrapper>
    <Checkbox dataCy={"checkbox-identifier"} value={true} />
    <Checkbox dataCy={"checkbox-identifier"} value={true} size={CheckboxSize.small} />
    <Checkbox dataCy={"checkbox-identifier"} value={false} />
    <Checkbox dataCy={"checkbox-identifier"} value={false} size={CheckboxSize.small} />
  </StoriesWrapper>
);

export const Values = () => (
  <StoriesWrapper>
    <Checkbox dataCy={"checkbox-identifier"} value={false} onChange={() => {}} />
    <Checkbox dataCy={"checkbox-identifier"} value={true} onChange={() => {}} />
    <Checkbox dataCy={"checkbox-identifier"} value={false} intermediate onChange={() => {}} />
    <Checkbox dataCy={"checkbox-identifier"} value={true} intermediate onChange={() => {}} />
  </StoriesWrapper>
);
