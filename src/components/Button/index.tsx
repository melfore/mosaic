import React, { FC } from 'react';
import MUIButton from '@material-ui/core/Button';
import Icon from '../Icon';
import { ButtonIconPosition, ButtonIconType, ButtonType, ButtonVariants } from '../../types/Button';

const getIcons = (dataCy: string, iconConfig?: ButtonIconType) => {
  const icons = { endIcon: undefined, startIcon: undefined };
  if (!iconConfig) {
    return
  }

  const { name, position } = iconConfig;
  const icon = <Icon dataCy={`${dataCy}-icon`} name={name} />;
  if (position === ButtonIconPosition.right) {
    return {
      ...icons,
      endIcon: icon,
    }
  }

  return {
    ...icons,
    startIcon: icon,
  }
}

const Button: FC<ButtonType> = ({
  dataCy = 'button',
  elevated = false,
  icon = undefined,
  label = 'Example',
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
      {...getIcons(dataCy, icon)}
    >
      {label}
    </MUIButton>
  );
}

export default Button