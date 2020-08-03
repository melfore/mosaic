import React, { ComponentType, createElement, ReactElement } from "react";
import { mount, ReactWrapper } from "enzyme";

import { IBase } from "../../types/Base";
import IntlProviderMock, { LocaleMock } from "../mocks/IntlProviderMock";

interface ITestable {
  element: ReactElement;
  wrapper: ReactWrapper;
}

interface ITestConfig<T> {
  dataCy: string;
  domNode: string;
  props: T;
}

export const getTestable = <T extends IBase>(Component: ComponentType<T>, config: ITestConfig<T>): ITestable => {
  const { dataCy, domNode, props } = config;
  const element = createElement(Component, props);
  const wrapper = mount(element).find(`${domNode}[data-cy='${dataCy}']`);
  return { element, wrapper };
};

export const getLocalizedTestable = <T extends IBase>(
  Component: ComponentType<T>,
  config: ITestConfig<T>
): ITestable => {
  const { dataCy, domNode, props } = config;
  const element = <IntlProviderMock locale={LocaleMock.en}>{createElement(Component, props)}</IntlProviderMock>;
  const wrapper = mount(element).find(`${domNode}[data-cy='${dataCy}']`);
  return { element, wrapper };
};
