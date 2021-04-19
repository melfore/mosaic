import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, object, select, text } from "@storybook/addon-knobs";

import { Icons } from "../../types/Icon";
import { InputSize, InputType, InputVariant } from "../../types/Input";
import FormMock from "../../utils/mocks/FormMock";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";

import InputText, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, InputTextWithProps, LOCALIZABLE_PROPS } from ".";

export default {
  title: "InputText",
  component: InputTextWithProps,
  parameters: {
    ...getDocumentationPage({
      basedOn: "",
      component: "InputText",
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
  // In a real case scenario "onChange" and "value" props must be passed to InputText
  <FormMock inputValue={text("value", "Some text")} onInputChange={action("onChange callback")}>
    <InputText
      adornment={object("adornment", undefined)}
      disabled={boolean("disabled", false)}
      label={text("label", "Label")}
      multiline={object("multiline", undefined)}
      onChange={action("onChange callback")}
      placeholder={text("placeholder", "Placeholder Text")}
      required={boolean("required", false)}
      size={select("size", InputSize, InputSize.default)}
      type={select("type", InputType, InputType.default)}
      value={text("value", "")}
      variant={select("variant", InputVariant, InputVariant.default)}
    />
  </FormMock>
);

export const CustomStyle = () => (
  <InputText
    label="Custom Style"
    style={{ color: "red", fontWeight: "bold", fontSize: "large", textAlign: "center" }}
    value="Some text"
  />
);

export const Disabled = () => (
  <StoriesWrapper>
    <InputText disabled label="Label" />
    <InputText disabled label="Label" value="Disabled" />
  </StoriesWrapper>
);

export const Localized = () => (
  // IntlProviderMock simulates external IntlProvider context
  <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
    <InputText
      label={MessageMock.inputText}
      localized
      onChange={action("Click on Button")}
      placeholder={MessageMock.inputText}
    />
  </IntlProviderMock>
);

export const Multiline = () => (
  <StoriesWrapper>
    <InputText
      label="Label"
      multiline={{
        rows: 1,
      }}
      value="Multiline by one"
    />
    <InputText
      label="Label"
      multiline={{
        rows: 3,
      }}
      value="Multiline by three"
    />
    <InputText
      label="Label"
      multiline={{
        rows: 3,
        rowsMax: 5,
      }}
      value="Multiline max five, broken in MUI"
    />
  </StoriesWrapper>
);

export const Required = () => <InputText value="Required" label="Label" required />;

export const Size = () => (
  <StoriesWrapper>
    <InputText label="Label" value="Default" />
    <InputText label="Label" size={InputSize.small} value="Small" />
  </StoriesWrapper>
);

export const Variant = () => (
  <StoriesWrapper>
    <InputText label="Label" value="Default" />
    <InputText label="Label" variant={InputVariant.filled} value="Filled" />
  </StoriesWrapper>
);

export const WithAdornment = () => (
  <StoriesWrapper>
    <InputText adornment={{ icon: Icons.search }} value="Adornment used to render icon" label="Label" />
    <InputText
      adornment={{ icon: Icons.close, onClick: action("On Clear") }}
      label="Label"
      value="Adornment is clickable and triggers an action"
    />
  </StoriesWrapper>
);

export const WithPlaceholder = () => <InputText placeholder="Type something..." label="Label" shrink />;
