import React, { FC } from "react";
import { IntlProvider } from "react-intl";

export enum LocaleMock {
  en = "en",
  it = "it-IT",
}

export enum MessageMock {
  button = "button",
  switch = "switch",
  inputText = "inputText",
}

interface IntlProviderMockType {
  locale?: LocaleMock;
}

export const mockedMessages = {
  [LocaleMock.en]: {
    [MessageMock.button]: "Button",
    [MessageMock.switch]: "Switch",
    [MessageMock.inputText]: "Input Text",
  },
  [LocaleMock.it]: {
    [MessageMock.button]: "Bottone",
    [MessageMock.switch]: "Interruttore",
    [MessageMock.inputText]: "Testo in input",
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
