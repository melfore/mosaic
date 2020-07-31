import React, { FC } from "react";
import { IntlProvider } from "react-intl";

export enum LocaleMock {
  en = "en",
  it = "it-IT",
}

export enum MessageMock {
  button = "button",
  cancel = "cancel",
  checkbox = "checkbox",
  confirm = "confirm",
  inputNumber = "inputNumber",
  inputText = "inputText",
  subtitle = "subtitle",
  switch = "switch",
  title = "title",
  typography = "typography",
}

interface IntlProviderMockType {
  locale?: LocaleMock;
}

export const mockedMessages = {
  [LocaleMock.en]: {
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
  [LocaleMock.it]: {
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

const IntlProviderMock: FC<IntlProviderMockType> = ({ children, locale = LocaleMock.en }) => {
  return (
    <IntlProvider locale={locale} messages={mockedMessages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default IntlProviderMock;
