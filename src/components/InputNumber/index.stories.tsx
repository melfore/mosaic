import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, number, text } from "@storybook/addon-knobs";
import { InputSize, InputVariant } from "../../types/Input";
import FormMock from "../../utils/mocks/FormMock";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { DOCS_PAGE_STRUCTURE, StoriesWrapper } from "../../utils/stories";
import InputNumber, { InputNumberIntl } from ".";

export default {
  title: "InputNumber",
  component: InputNumber,
  parameters: {
    ...DOCS_PAGE_STRUCTURE,
  },
};

export const Canvas = () => (
  // FormMock simulates external form component handling state
  // In a real case scenario "onChange" and "value" props must be passed to InputNumber
  <FormMock inputValue={number("value", 5)} onInputChange={action("onChange callback")}>
    <InputNumber
      dataCy="input-text"
      disabled={boolean("disabled", false)}
      integer={boolean("integer", true)}
      label={text("label", "Label")}
      minValue={number("minValue", 0)}
      maxValue={number("maxValue", 9)}
      onChange={action("onChange callback")}
      required={boolean("required", false)}
      shrink={boolean("shrink", true)}
      size={select("size", InputSize, InputSize.default)}
      variant={select("variant", InputVariant, InputVariant.default)}
      value={number("value", 5)}
    />
  </FormMock>
);

export const Bounded = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" label="Bounded 0-9" minValue={0} maxValue={9} required value={5} />
  </StoriesWrapper>
);

export const DefaultNull = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" label="Default null" />
  </StoriesWrapper>
);

export const IntegerAndFloat = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" label="Integer" value={5} />
    <InputNumber dataCy="input-number" integer={false} label="Float" value={5.5} />
  </StoriesWrapper>
);

export const Required = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" label="Required" required value={10} />
  </StoriesWrapper>
);

export const Size = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" label="Default" value={10} />
    <InputNumber dataCy="input-number" label="Small" size={InputSize.small} value={10} />
  </StoriesWrapper>
);

export const Variant = () => (
  <StoriesWrapper>
    <InputNumber dataCy="input-number" label="Default" value={10} />
    <InputNumber dataCy="input-number" label="Filled" variant={InputVariant.filled} value={10} />
  </StoriesWrapper>
);

export const WithIntl = () => (
  // IntlProviderMock simulates external IntlProvider context
  // The `InputNumberIntl` exported version of `InputNumber` uses `labelId` prop to get a localized label.
  // When using `InputNumberIntl` the prop `dataCy` can be omitted as it defaults to `labelId` value.
  <StoriesWrapper>
    <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
      <InputNumberIntl labelId={MessageMock.inputNumber} onChange={action("Click on Button")} />
    </IntlProviderMock>
  </StoriesWrapper>
);
