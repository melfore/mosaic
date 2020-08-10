import React, { FC } from "react";
import { IntlProvider } from "react-intl";

export enum LocaleMock {
  en = "en",
  it = "it-IT",
}

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
