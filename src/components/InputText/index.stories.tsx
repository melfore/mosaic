import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, object, select, text } from "@storybook/addon-knobs";

import { Icons } from "../../types/Icon";
import { InputSize, InputType, InputVariant } from "../../types/Input";
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
  <InputText
    adornment={object("adornment", undefined)}
    disabled={boolean("disabled", false)}
    initialValue={text("initialValue", "")}
    label={text("label", "Label")}
    multiline={object("multiline", undefined)}
    onChange={action("onChange callback")}
    placeholder={text("placeholder", "Placeholder Text")}
    required={boolean("required", false)}
    shrink={boolean("shrink", false)}
    size={select("size", InputSize, InputSize.default)}
    type={select("type", InputType, InputType.default)}
    variant={select("variant", InputVariant, InputVariant.default)}
  />
);

export const CustomStyle = () => (
  <InputText
    initialValue="Some text"
    label="Custom Style"
    style={{ color: "red", fontWeight: "bold", fontSize: "large", textAlign: "center" }}
  />
);

export const Disabled = () => (
  <StoriesWrapper>
    <InputText disabled label="Label" />
    <InputText disabled initialValue="Disabled" label="Label" />
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
      initialValue="Multiline by one"
      label="Label"
      multiline={{
        rows: 1,
      }}
    />
    <InputText
      initialValue="Multiline by three"
      label="Label"
      multiline={{
        rows: 3,
      }}
    />
    <InputText
      initialValue="Multiline max five, broken in MUI"
      label="Label"
      multiline={{
        rows: 3,
        rowsMax: 5,
      }}
    />
  </StoriesWrapper>
);

export const Required = () => <InputText initialValue="Required" label="Label" required />;

export const Size = () => (
  <StoriesWrapper>
    <InputText initialValue="Default" label="Label" />
    <InputText initialValue="Small" label="Label" size={InputSize.small} />
  </StoriesWrapper>
);

export const Variant = () => (
  <StoriesWrapper>
    <InputText initialValue="Default" label="Label" />
    <InputText initialValue="Filled" label="Label" variant={InputVariant.filled} />
  </StoriesWrapper>
);

export const WithAdornment = () => (
  <StoriesWrapper>
    <InputText adornment={{ icon: Icons.search }} initialValue="Adornment used to render icon" label="Label" />
    <InputText
      adornment={{ icon: Icons.close, onClick: action("On Clear") }}
      initialValue="Adornment is clickable and triggers an action"
      label="Label"
    />
  </StoriesWrapper>
);

export const WithPlaceholder = () => <InputText placeholder="Type something..." label="Label" shrink />;
