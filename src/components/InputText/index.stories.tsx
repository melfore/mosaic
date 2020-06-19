import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text, object, select } from "@storybook/addon-knobs";
import { InputSize, InputVariant, InputDataType } from "../../types/Input";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import InputText, { InputTextIntl } from ".";
import { Icons } from "../../types/Icon";

export default {
  title: "InputText",
  component: InputText,
  parameters: {
    ...getDocsPageStructure("InputText"),
  },
};

export const Canvas = () => (
  <InputText
    adornment={object("adornment", undefined)}
    dataCy="input-text"
    disabled={boolean("disabled", false)}
    initialValue={text("initialValue", "")}
    label={text("label", "Label")}
    multiline={object("multiline", undefined)}
    onChange={action("onChange callback")}
    placeholder={text("placeholder", "Placeholder Text")}
    required={boolean("required", false)}
    shrink={boolean("shrink", false)}
    size={select("size", InputSize, InputSize.default)}
    type={select("type", InputDataType, InputDataType.default)}
    variant={select("variant", InputVariant, InputVariant.default)}
  />
);

export const Disabled = () => (
  <StoriesWrapper>
    <InputText dataCy="input-text" disabled label="Label" />
    <InputText dataCy="input-text" disabled initialValue="Disabled" label="Label" />
  </StoriesWrapper>
);

export const Multiline = () => (
  <StoriesWrapper>
    <InputText
      dataCy="input-text"
      initialValue="Multiline by one"
      label="Label"
      multiline={{
        rows: 1,
      }}
    />
    <InputText
      dataCy="input-text"
      initialValue="Multiline by three"
      label="Label"
      multiline={{
        rows: 3,
      }}
    />
    <InputText
      dataCy="input-text"
      initialValue="Multiline max five, broken in MUI"
      label="Label"
      multiline={{
        rows: 3,
        rowsMax: 5,
      }}
    />
  </StoriesWrapper>
);

export const Required = () => (
  <StoriesWrapper>
    <InputText dataCy="input-text" initialValue="Required" label="Label" required />
  </StoriesWrapper>
);

export const Size = () => (
  <StoriesWrapper>
    <InputText dataCy="input-text" initialValue="Default" label="Label" />
    <InputText dataCy="input-text" initialValue="Small" label="Label" size={InputSize.small} />
  </StoriesWrapper>
);

export const Variant = () => (
  <StoriesWrapper>
    <InputText dataCy="input-text" initialValue="Default" label="Label" />
    <InputText dataCy="input-text" initialValue="Filled" label="Label" variant={InputVariant.filled} />
  </StoriesWrapper>
);

export const WithAdornment = () => (
  <StoriesWrapper>
    <InputText
      adornment={{ icon: Icons.search }}
      dataCy="input-text"
      initialValue="Adornment used to render icon"
      label="Label"
    />
    <InputText
      adornment={{ icon: Icons.close, onClick: action("On Clear") }}
      dataCy="input-text"
      initialValue="Adornment is clickable and triggers an action"
      label="Label"
    />
  </StoriesWrapper>
);

export const WithPlaceholder = () => (
  <StoriesWrapper>
    <InputText dataCy="input-text" placeholder="Type something..." label="Label" shrink />
  </StoriesWrapper>
);

export const WithIntl = () => (
  // IntlProviderMock simulates external IntlProvider context
  // The `InputTextIntl` exported version of `InputText` uses `labelId` prop to get a localized label.
  // When using `InputTextIntl` the prop `dataCy` can be omitted as it defaults to `labelId` value.
  <StoriesWrapper>
    <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
      <InputTextIntl labelId={MessageMock.inputText} onChange={action("Click on Button")} />
    </IntlProviderMock>
  </StoriesWrapper>
);
