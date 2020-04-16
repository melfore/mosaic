import React, { FC } from "react";
import { IntlProvider } from "react-intl";

export enum LocaleMock {
  en = "en",
  it = "it-IT",
}

export enum MessageMock {
  button = "button",
  inputText = "inputText",
  inputNumber = "inputNumber",
  modalCancel = "modalCancel",
  modalConfirm = "modalConfirm",
  modalTitle = "modalTitle",
  switch = "switch",
  checkbox = "checkbox",
}

interface IntlProviderMockType {
  locale?: LocaleMock;
}

export const mockedMessages = {
  [LocaleMock.en]: {
    [MessageMock.button]: "Button",
    [MessageMock.inputNumber]: "Input Number",
    [MessageMock.inputText]: "Input Text",
    [MessageMock.modalCancel]: "Cancel",
    [MessageMock.modalConfirm]: "Confirm",
    [MessageMock.modalTitle]: "Title",
    [MessageMock.switch]: "Switch",
    [MessageMock.checkbox]: "Checkbox",
  },
  [LocaleMock.it]: {
    [MessageMock.button]: "Bottone",
    [MessageMock.inputNumber]: "Numero in input",
    [MessageMock.inputText]: "Testo in input",
    [MessageMock.modalCancel]: "Annulla",
    [MessageMock.modalConfirm]: "Conferma",
    [MessageMock.modalTitle]: "Titolo",
    [MessageMock.checkbox]: "Spunta",
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
