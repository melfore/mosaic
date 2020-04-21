import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text, optionsKnob as options, select } from "@storybook/addon-knobs";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import Checkbox from ".";
import { CheckboxSize } from "../../types/Checkbox";
import FormMock from "../../utils/mocks/FormMock";

export default {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    ...getDocsPageStructure("Checkbox", ["usage", "canvas"]),
  },
};

export const Canvas = () => (
  // FormMock simulates external form component handling state
  // In a real case scenario "onChange" and "value" props must be passed to Checkbox
  <FormMock inputValue={boolean("value", true)} onInputChange={action("Change checkbox")}>
    <Checkbox
      dataCy={text("data-cy", "checkbox-identifier")}
      value={boolean("value", true)}
      onChange={action("Change checkbox")}
      required={boolean("value", false)}
      size={select("size", CheckboxSize, CheckboxSize.small, CheckboxSize.default)}
      disabled={boolean("disabled", false)}
      intermediate={boolean("intermediate", false)}
    />
  </FormMock>
);

export const Values = () => (
  <StoriesWrapper>
    <Checkbox dataCy={"checkbox-identifier"} value={false} onChange={() => {}} />
    <Checkbox dataCy={"checkbox-identifier"} value={true} onChange={() => {}} />
    <Checkbox dataCy={"checkbox-identifier"} value={false} intermediate onChange={() => {}} />
    <Checkbox dataCy={"checkbox-identifier"} value={true} intermediate onChange={() => {}} />
  </StoriesWrapper>
);

export const Disabled = () => (
  <StoriesWrapper>
    <Checkbox dataCy={"checkbox-identifier"} value={false} disabled />
    <Checkbox dataCy={"checkbox-identifier"} value={true} disabled />
    <Checkbox dataCy={"checkbox-identifier"} intermediate disabled />
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
