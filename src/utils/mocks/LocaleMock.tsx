import React from "react";
import { Decorator } from "@storybook/react";

import { MosaicContextProvider } from "../../contexts/Mosaic";

export type ILocaleMock = "en" | "it-IT";

export enum MessageMock {
  button = "locale.button",
  cancel = "locale.cancel",
  checkbox = "locale.checkbox",
  confirm = "locale.confirm",
  inputNumber = "locale.inputNumber",
  inputText = "locale.inputText",
  label = "locale.label",
  placeholder = "locale.placeholder",
  select = "locale.select",
  subtitle = "locale.subtitle",
  switch = "locale.switch",
  text = "locale.text",
  title = "locale.title",
  typography = "locale.typography",
  value = "locale.value",
}

type IMessagesMock = {
  [key in ILocaleMock]: {
    [key in MessageMock]: string;
  };
};

export const MESSAGES_MOCK: IMessagesMock = {
  en: {
    [MessageMock.button]: "Button",
    [MessageMock.cancel]: "Cancel",
    [MessageMock.checkbox]: "Checkbox",
    [MessageMock.confirm]: "Confirm",
    [MessageMock.inputNumber]: "Input Number",
    [MessageMock.inputText]: "Input Text",
    [MessageMock.label]: "Label",
    [MessageMock.placeholder]: "Enter value...",
    [MessageMock.select]: "Dropdown",
    [MessageMock.subtitle]: "Subtitle",
    [MessageMock.switch]: "Switch",
    [MessageMock.text]: "Some lines of text...",
    [MessageMock.title]: "Title",
    [MessageMock.typography]: "Text",
    [MessageMock.value]: "Value",
  },
  "it-IT": {
    [MessageMock.button]: "Bottone",
    [MessageMock.cancel]: "Annulla",
    [MessageMock.checkbox]: "Spunta",
    [MessageMock.confirm]: "Conferma",
    [MessageMock.inputNumber]: "Campo numerico",
    [MessageMock.inputText]: "Campo testuale",
    [MessageMock.label]: "Etichetta",
    [MessageMock.placeholder]: "Inserire valore...",
    [MessageMock.select]: "Menu a tendina",
    [MessageMock.subtitle]: "Sottotitolo",
    [MessageMock.switch]: "Interruttore",
    [MessageMock.text]: "Qualche riga di testo...",
    [MessageMock.title]: "Titolo",
    [MessageMock.typography]: "Testo",
    [MessageMock.value]: "Valore",
  },
};

const getLocalizedMessageMock = (key: MessageMock, locale: ILocaleMock): string => MESSAGES_MOCK[locale][key] || key;

const localeDecorator: Decorator = (Story) => (
  <MosaicContextProvider localize={(key) => getLocalizedMessageMock(key as MessageMock, "it-IT")}>
    {Story()}
  </MosaicContextProvider>
);

export { getLocalizedMessageMock, localeDecorator };
