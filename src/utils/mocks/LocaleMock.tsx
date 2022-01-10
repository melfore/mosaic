import React from "react";
import { DecoratorFn } from "@storybook/react";

import { MosaicContextProvider } from "../../contexts/Mosaic";

export type ILocaleMock = "en" | "it-IT";

export enum MessageMock {
  button = "locale.button",
  cancel = "locale.cancel",
  checkbox = "locale.checkbox",
  confirm = "locale.confirm",
  inputNumber = "locale.inputNumber",
  inputText = "locale.inputText",
  subtitle = "locale.subtitle",
  switch = "locale.switch",
  title = "locale.title",
  typography = "locale.typography",
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
    [MessageMock.subtitle]: "Subtitle",
    [MessageMock.switch]: "Switch",
    [MessageMock.title]: "Title",
    [MessageMock.typography]: "Typography",
  },
  "it-IT": {
    [MessageMock.button]: "Bottone",
    [MessageMock.cancel]: "Annulla",
    [MessageMock.checkbox]: "Spunta",
    [MessageMock.confirm]: "Conferma",
    [MessageMock.inputNumber]: "Numero in input",
    [MessageMock.inputText]: "Testo in input",
    [MessageMock.subtitle]: "Sottotitolo",
    [MessageMock.switch]: "Interruttore",
    [MessageMock.title]: "Titolo",
    [MessageMock.typography]: "Tipografia",
  },
};

const getLocalizedMessageMock = (key: MessageMock, locale: ILocaleMock): string => MESSAGES_MOCK[locale][key] || key;

const localeDecorator: DecoratorFn = (Story) => (
  <MosaicContextProvider localize={(key) => getLocalizedMessageMock(key as MessageMock, "it-IT")}>
    {Story()}
  </MosaicContextProvider>
);

export { getLocalizedMessageMock, localeDecorator };
