import React, { FC } from 'react';
import MUIButton from '@material-ui/core/Button';
import {
  ButtonIconPosition,
  ButtonIconType,
  ButtonType,
  ButtonVariants,
} from '../../types/Button';

const getIcon = (iconConfig?: ButtonIconType) => {
  if (!iconConfig) {
    return {};
  }

  const { icon, position } = iconConfig;
  if (position === ButtonIconPosition.left) {
    return {
      startIcon: icon,
    };
  }

  return {
    endIcon: icon,
  };
}

const Button: FC<ButtonType> = ({
  dataCy,
  elevated = false,
  icon = undefined,
  label,
  onClick,
  variant = ButtonVariants.contained,
}) => {
  return (
    <MUIButton
      color="primary"
      data-cy={dataCy}
      disableElevation={!elevated}
      onClick={onClick}
      variant={variant}
      {...getIcon(icon)}
    >
      {label}
    </MUIButton>
  );
}

export default Button