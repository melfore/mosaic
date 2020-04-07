import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, number, text } from "@storybook/addon-knobs";
import { InputSize, InputVariant } from "../../types/Input";
import { DOCS_PAGE_STRUCTURE, StoriesWrapper } from "../../utils/storybook";
import InputNumber from ".";

export default {
  title: "InputNumber",
  component: InputNumber,
  parameters: {
    ...DOCS_PAGE_STRUCTURE,
  },
};

export const Canvas = () => (
  <InputNumber
    dataCy="input-text"
    disabled={boolean("disabled", false)}
    integer={boolean("integer", true)}
    initialValue={number("initialValue", 5)}
    label={text("label", "Label")}
    minValue={number("minValue", 0)}
    maxValue={number("maxValue", 9)}
    onChange={action("onChange callback")}
    required={boolean("required", false)}
    shrink={boolean("shrink", true)}
    size={select("size", InputSize, InputSize.default)}
    variant={select("variant", InputVariant, InputVariant.default)}
  />
);

export const Bounded = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" initialValue={5} label="Bounded 0-9" minValue={0} maxValue={9} required />
    <InputNumber
      dataCy="input-number"
      initialValue={10}
      label="Out of bounds error"
      minValue={0}
      maxValue={9}
      required
    />
  </StoriesWrapper>
);

export const DefaultNull = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" label="Default null" />
  </StoriesWrapper>
);

export const IntegerAndFloat = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" initialValue={5} label="Integer" />
    <InputNumber dataCy="input-number" initialValue={5.5} integer={false} label="Float" />
  </StoriesWrapper>
);

export const Required = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" initialValue={10} label="Required" required />
  </StoriesWrapper>
);

export const Size = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" initialValue={10} label="Default" />
    <InputNumber dataCy="input-number" initialValue={10} label="Small" size={InputSize.small} />
  </StoriesWrapper>
);

export const Variant = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" initialValue={10} label="Default" />
    <InputNumber dataCy="input-number" initialValue={10} label="Filled" variant={InputVariant.filled} />
  </StoriesWrapper>
);
