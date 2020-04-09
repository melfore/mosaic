import React, { ComponentType, FC } from "react";
import { useIntl } from "react-intl";
import { BaseType, BaseIntlType } from "../../types/Base";

const withIntl = <T extends BaseType>(Component: ComponentType<T>): FC<T & BaseIntlType> => ({
  dataCy = "",
  labelId,
  ...props
}) => {
  const intl = useIntl();
  const localizedLabel = intl.formatMessage({ id: labelId });
  return <Component {...(props as T)} dataCy={dataCy || labelId} label={localizedLabel} />;
};

export default withIntl;
