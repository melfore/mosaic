import React, { ComponentType, FC } from "react";
import { IntlShape, useIntl } from "react-intl";

import { ILocalizable } from "../../types/Base";

export interface ILocalizableProperty {
  name: string;
  type: "any" | "any[]" | "string" | "string[]";
}

interface ILocalizedOptions {
  dataCyShortcut: string;
  localizableProps: ILocalizableProperty[];
}

interface ILocalizableValuePath {
  objectName: string;
  propertyName: string;
}

const getValuePath = (name: string): ILocalizableValuePath => ({
  objectName: name.split(".")[0],
  propertyName: name.split(".")[1],
});

const localizeString = (propName: string, allProps: any, intl: IntlShape): any => {
  if (!allProps || !allProps[propName]) {
    return { ...allProps };
  }

  const propValue = allProps[propName] as string;
  return {
    ...allProps,
    [propName]: intl.formatMessage({ id: propValue }),
  };
};

const localizeStringArray = (propName: string, allProps: any, intl: IntlShape): any => {
  if (!allProps || !allProps[propName]) {
    return { ...allProps };
  }

  const stringArray = allProps[propName] as string[];
  return {
    ...allProps,
    [propName]: stringArray.map((stringArrayElement) => intl.formatMessage({ id: stringArrayElement })),
  };
};

const localizeAnyObject = (propName: string, allProps: any, intl: IntlShape): any => {
  const { objectName, propertyName } = getValuePath(propName);
  if (!allProps || !allProps[objectName]) {
    return { ...allProps };
  }

  const anyObject = allProps[objectName] as any;
  return {
    ...allProps,
    [objectName]: localizeString(propertyName, anyObject, intl),
  };
};

const localizeAnyArray = (propName: string, allProps: any, intl: IntlShape): any => {
  const { objectName: arrayName, propertyName } = getValuePath(propName);
  if (!allProps || !allProps[arrayName]) {
    return { ...allProps };
  }

  const anyArray = allProps[arrayName] as any[];
  return {
    ...allProps,
    [arrayName]: anyArray.map((anyArrayElement: any) => localizeString(propertyName, anyArrayElement, intl)),
  };
};

const localized = <T extends ILocalizable>(Component: ComponentType<T>, options: ILocalizedOptions): FC<T> => (
  props
) => {
  const { dataCy, localized } = props;
  const { dataCyShortcut, localizableProps } = options;
  if (!localized) {
    return <Component {...props} />;
  }

  const intl = useIntl();
  let localizedProps = { ...props } as any;
  localizedProps.dataCy = !dataCy ? localizedProps[dataCyShortcut] : dataCy;

  localizableProps.forEach(({ name, type }) => {
    switch (type) {
      case "any":
        localizedProps = localizeAnyObject(name, localizedProps, intl);
        break;
      case "any[]":
        localizedProps = localizeAnyArray(name, localizedProps, intl);
        break;
      case "string":
      default:
        localizedProps = localizeString(name, localizedProps, intl);
        break;
      case "string[]":
        localizedProps = localizeStringArray(name, localizedProps, intl);
        break;
    }
  });

  return <Component {...localizedProps} />;
};

export default localized;
