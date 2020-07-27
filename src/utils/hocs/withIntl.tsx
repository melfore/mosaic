import React, { ComponentType, FC } from "react";
import { useIntl } from "react-intl";
import { IBase, DEPRECATED_IBaseIntl } from "../../types/Base";

const DEPRECATED_withIntl = <T extends IBase>(Component: ComponentType<T>): FC<T & DEPRECATED_IBaseIntl> => ({
  dataCy = "",
  labelId,
  ...props
}) => {
  const intl = useIntl();
  const localizedLabel = intl.formatMessage({ id: labelId });
  return <Component {...(props as T)} dataCy={dataCy || labelId} label={localizedLabel} />;
};

export default DEPRECATED_withIntl;
