import React from "react";
import { DecoratorFn } from "@storybook/react";

import { LocalizedContextProvider } from "../../contexts/Localized";

export type ILocaleMock = "en" | "it-IT";

export enum MessageMock {
  button = "intl.message.button",
  cancel = "intl.message.cancel",
  checkbox = "intl.message.checkbox",
  confirm = "intl.message.confirm",
  inputNumber = "intl.message.inputNumber",
  inputText = "intl.message.inputText",
  subtitle = "intl.message.subtitle",
  switch = "intl.message.switch",
  title = "intl.message.title",
  typography = "typography",
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

const getLocalizedMessage = (key: MessageMock, locale: ILocaleMock): string => MESSAGES_MOCK[locale][key];

const localeDecorator: DecoratorFn = (Story) => (
  <LocalizedContextProvider localize={(key) => getLocalizedMessage(key as MessageMock, "it-IT")}>
    {Story()}
  </LocalizedContextProvider>
);

export { getLocalizedMessage, localeDecorator };
