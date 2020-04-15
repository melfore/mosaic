import React, { FC } from "react";
import { IntlProvider } from "react-intl";

export enum LocaleMock {
  en = "en",
  it = "it-IT",
}

export enum MessageMock {
  button = "button",
  modal_cancel = "modal_cancel",
  modal_confirm = "modal_confirm",
  modal_title = "modal_title",
}

interface IntlProviderMockType {
  locale?: LocaleMock;
}

export const mockedMessages = {
  [LocaleMock.en]: {
    [MessageMock.button]: "Button",
    [MessageMock.modal_cancel]: "Cancel",
    [MessageMock.modal_confirm]: "Confirm",
    [MessageMock.modal_title]: "Title",
  },
  [LocaleMock.it]: {
    [MessageMock.button]: "Bottone",
    [MessageMock.modal_cancel]: "Annulla",
    [MessageMock.modal_confirm]: "Conferma",
    [MessageMock.modal_title]: "Titolo",
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
