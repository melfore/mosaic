/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Decorator } from "@storybook/react";

import { MosaicContextProvider } from "../../../contexts/Mosaic";

export type ILocaleMock = "en" | "it-IT";

export enum MessageMock {
  page1 = "locale.page1",
  page2 = "locale.page2",
  page3 = "locale.page3",
  step1 = "locale.step1",
  step2 = "locale.step2",
  step3 = "locale.step3",
  next = "locale.next",
  back = "locale.back",
  finish = "locale.finish",
  dateTime = "locale.dateTime",
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
    [MessageMock.page1]: "Page1",
    [MessageMock.page2]: "Page2",
    [MessageMock.page3]: "Page3",
    [MessageMock.step1]: "Step1",
    [MessageMock.step2]: "Step2",
    [MessageMock.step3]: "Step3",
    [MessageMock.next]: "Next",
    [MessageMock.back]: "Back",
    [MessageMock.finish]: "Finish",
    [MessageMock.dateTime]: "Date Time",
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
    [MessageMock.page1]: "Pagina 1",
    [MessageMock.page2]: "Pagina 2",
    [MessageMock.page3]: "Pagina 3",
    [MessageMock.step1]: "1°Passo",
    [MessageMock.step2]: "2°Passo",
    [MessageMock.step3]: "3°Passo",
    [MessageMock.next]: "Avanti",
    [MessageMock.back]: "Dietro",
    [MessageMock.finish]: "Finito",
    [MessageMock.dateTime]: "Data Ore",
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

const LocaleDecorator: Decorator = (Story) => (
  <MosaicContextProvider localize={(key: any) => getLocalizedMessageMock(key as MessageMock, "it-IT")}>
    {Story()}
  </MosaicContextProvider>
);

export default LocaleDecorator;
