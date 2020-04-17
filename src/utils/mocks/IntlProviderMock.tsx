import React, { FC } from "react";
import { IntlProvider } from "react-intl";

export enum LocaleMock {
  en = "en",
  it = "it-IT",
}

export enum MessageMock {
  button = "button",
  checkbox = "checkbox",
  inputNumber = "inputNumber",
  inputText = "inputText",
  modalCancel = "modalCancel",
  modalConfirm = "modalConfirm",
  modalTitle = "modalTitle",
  switch = "switch",
  typography = "typography",
}

interface IntlProviderMockType {
  locale?: LocaleMock;
}

export const mockedMessages = {
  [LocaleMock.en]: {
    [MessageMock.button]: "Button",
    [MessageMock.checkbox]: "Checkbox",
    [MessageMock.inputNumber]: "Input Number",
    [MessageMock.inputText]: "Input Text",
    [MessageMock.modalCancel]: "Cancel",
    [MessageMock.modalConfirm]: "Confirm",
    [MessageMock.modalTitle]: "Title",
    [MessageMock.switch]: "Switch",
    [MessageMock.typography]: "Typography",
  },
  [LocaleMock.it]: {
    [MessageMock.button]: "Bottone",
    [MessageMock.checkbox]: "Spunta",
    [MessageMock.inputNumber]: "Numero in input",
    [MessageMock.inputText]: "Testo in input",
    [MessageMock.modalCancel]: "Annulla",
    [MessageMock.modalConfirm]: "Conferma",
    [MessageMock.modalTitle]: "Titolo",
    [MessageMock.switch]: "Interruttore",
    [MessageMock.typography]: "Tipografia",
  },
};

const IntlProviderMock: FC<IntlProviderMockType> = ({ children, locale = LocaleMock.en }) => {
  return (
    <IntlProvider locale={locale} messages={mockedMessages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default IntlProviderMock;
