import { ComponentType, ReactElement, createElement } from "react";
import { mount, ReactWrapper } from "enzyme";
import { IBase } from "../../types/Base";

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
