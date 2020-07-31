import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, number, text } from "@storybook/addon-knobs";
import { InputSize, InputVariant } from "../../types/Input";
import FormMock from "../../utils/mocks/FormMock";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";
import InputNumber, { InputNumberWithProps, DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS } from ".";

export default {
  title: "InputNumber",
  component: InputNumberWithProps,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/TextField",
      component: "InputNumber",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
        dataCyShortcut: DATA_CY_SHORTCUT,
      },
      localizableProps: LOCALIZABLE_PROPS,
    }),
  },
};

export const Canvas = () => (
  // FormMock simulates external form component handling state
  // In a real case scenario "onChange" and "value" props must be passed to InputNumber
  <FormMock inputValue={number("value", 5)} onInputChange={action("onChange callback")}>
    <InputNumber
      dataCy={text("dataCy", DATA_CY_DEFAULT)}
      disabled={boolean("disabled", false)}
      integer={boolean("integer", true)}
      label={text("label", "Label")}
      localized={boolean("localized", false)}
      minValue={number("minValue", 0)}
      maxValue={number("maxValue", 9)}
      onChange={action("onChange callback")}
      placeholder={text("placeholder", "Placeholder Text")}
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

export const Localized = () => (
  // IntlProviderMock simulates external IntlProvider context
  <StoriesWrapper>
    <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
      <InputNumber
        label={MessageMock.inputNumber}
        localized
        onChange={action("Click on Button")}
        placeholder={MessageMock.inputNumber}
      />
    </IntlProviderMock>
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
