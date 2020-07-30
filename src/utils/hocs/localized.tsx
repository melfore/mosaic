import React, { ComponentType, FC } from "react";
import { useIntl } from "react-intl";

import { ILocalizable } from "../../types/Base";

export interface ILocalizableProperty {
  name: string;
  type: "string";
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

        localizedProps[name] = intl.formatMessage({ id: propertyValue });
        break;
      // case "any":
      //   const { objectName, propertyName } = getValuePath(name);
      //   anyProps[objectName] = {
      //     ...anyProps[objectName],
      //     [propertyName]: intl.formatMessage({ id: anyProps[name] as string }),
      //   };
      //   break;
      // case "any[]":
      //   const { objectName: arrayName, propertyName: objectPropertyName } = getValuePath(name);
      //   anyProps[arrayName] = [...anyProps[arrayName]].map((value) => ({
      //     ...value,
      //     [objectPropertyName]: intl.formatMessage({
      //       id: value[objectPropertyName],
      //     }),
      //   }));
      //   break;
      // case "string[]":
      //   anyProps[name] = (anyProps[name] as string[]).map((value) => intl.formatMessage({ id: value }));
      //   break;
    }
  });

  return <Component {...localizedProps} />;
};

export default localized;
