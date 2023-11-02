/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentType, createElement, ReactElement } from "react";
import { mount, ReactWrapper } from "enzyme";

import { MosaicContextProvider } from "../../contexts/Mosaic";
import { IBase } from "../../types/Base";
import { getLocalizedMessageMock, MessageMock } from "../mocks/LocaleMock";

interface ITestableComponent {
  element: ReactElement;
  wrapper: ReactWrapper;
}

export interface ITestOptions<T> {
  dataCy: string;
  domNode: string;
  localized?: boolean;
  mountOnly?: boolean;
  props: T;
}

export type IPartialTestOptions<T> = Partial<Omit<ITestOptions<T>, "props">> & {
  props?: Partial<T>;
};

/**
 * Creates ReactElement using Component and specified options
 * @param Component the React component to test
 * @param options the test options to apply
 */
const getReactElement = <T extends IBase>(Component: ComponentType<T>, options: ITestOptions<T>): ReactElement => {
  const { localized, props } = options;
  let element = createElement(Component, props);
  if (localized) {
    element = (
      <MosaicContextProvider localize={(key) => getLocalizedMessageMock(key as MessageMock, "en")}>
        {createElement(Component, props)}
      </MosaicContextProvider>
    );
  }

  return element;
};

/**
 * Mounts element and gets ReactWrapper for element with specified options
 * @param element the ReactElement to mount
 * @param options the test options to apply
 */
const getReactWrapper = <T extends IBase>(element: any, options: ITestOptions<T>): ReactWrapper => {
  const { dataCy, domNode, mountOnly } = options;
  const wrapper = mount(element);
  if (mountOnly) {
    return wrapper;
  }

  return wrapper.find(`${domNode}[data-cy='${dataCy}']`);
};

/**
 * Gets TestableComponent for Component and specified options
 * @param Component the React component to test
 * @param options the test options to apply
 */
export const getTestableComponent = <T extends IBase>(
  Component: ComponentType<T>,
  defaultOptions: ITestOptions<T>,
  partialOptions?: IPartialTestOptions<T>
): ITestableComponent => {
  const options: ITestOptions<T> = {
    ...defaultOptions,
    ...partialOptions,
    props: { ...defaultOptions.props, ...partialOptions?.props },
  };

  const element = getReactElement(Component, options);
  const wrapper = getReactWrapper(element, options);
  return { element, wrapper };
};
