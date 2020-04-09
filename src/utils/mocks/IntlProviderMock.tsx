import React, { FC } from "react";
import { IntlProvider } from "react-intl";

export enum LocaleMock {
  en = "en",
  it = "it-IT",
}

export enum MessageMock {
  button = "button",
}

interface IntlProviderMockType {
  locale?: LocaleMock;
}

export const mockedMessages = {
  [LocaleMock.en]: {
    [MessageMock.button]: "Button",
  },
  [LocaleMock.it]: {
    [MessageMock.button]: "Bottone",
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
