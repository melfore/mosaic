import React, { FC } from 'react';
import { IconType, IconSize } from '../../types/Icon';
import { iconsCatalog } from './utils';

const Icon: FC<IconType> = ({ dataCy, name, size = IconSize.default }) => {
  const icon = iconsCatalog[name];
  // Argument of type '{ 'data-cy': string; fontSize: IconSize; }' is not assignable to parameter of type 'Attributes & SvgIconProps'.
  return React.createElement(icon, { 'data-cy': dataCy, fontSize: size });
};

export default Icon;