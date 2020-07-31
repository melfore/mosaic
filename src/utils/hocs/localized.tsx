import React, { ComponentType, FC } from "react";
import { useIntl } from "react-intl";

import { ILocalizable } from "../../types/Base";

export interface ILocalizableProperty {
  name: string;
  type: "any" | "any[]" | "string";
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

const localized = <T extends ILocalizable>(Component: ComponentType<T>, options: ILocalizedOptions): FC<T> => (
  props
) => {
  const { dataCy, localized } = props;
  const { dataCyShortcut, localizableProps } = options;
  if (!localized) {
    return <Component {...props} />;
  }

  const intl = useIntl();
  const localizedProps = { ...props } as any;
  localizedProps.dataCy = !dataCy ? localizedProps[dataCyShortcut] : dataCy;

  localizableProps.forEach(({ name, type }) => {
    switch (type) {
      case "string":
      default:
        const propertyValue = localizedProps[name];
        if (!propertyValue) {
          break;
        }

        localizedProps[name] = intl.formatMessage({ id: propertyValue as string });
        break;
      case "any":
        const { objectName, propertyName } = getValuePath(name);
        if (!localizedProps[objectName]) {
          break;
        }

        const anyProps = localizedProps[objectName];
        if (!anyProps[propertyName]) {
          break;
        }

        localizedProps[objectName] = {
          ...localizedProps[objectName],
          [propertyName]: intl.formatMessage({ id: anyProps[propertyName] as string }),
        };
        break;
      case "any[]":
        const { objectName: arrayName, propertyName: objectProperty } = getValuePath(name);
        if (!localizedProps[arrayName] || localizedProps[arrayName].length < 1) {
          break;
        }

        localizedProps[arrayName] = localizedProps[arrayName].map((arrayElement: any) => ({
          ...arrayElement,
          [objectProperty]: intl.formatMessage({ id: arrayElement[objectProperty] as string }),
        }));
        break;
    }
  });

  return <Component {...localizedProps} />;
};

export default localized;
