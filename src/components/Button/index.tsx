import React, { FC, MouseEvent, ReactElement } from 'react';
import MUIButton from '@material-ui/core/Button';

export enum ButtonIconPosition {
  left = 'left',
  right ='right'
}

interface ButtonIcon {
  icon: ReactElement,
  position: ButtonIconPosition,
}

export enum ButtonVariants {
  contained = 'contained',
  outlined = 'outlined'
}

interface ButtonProps {
  elevated?: boolean,
  icon?: ButtonIcon,
  label: string,
  onClick: (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
  variant?: ButtonVariants
}

const getIcon = (iconConfig?: ButtonIcon) => {
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

const Button: FC<ButtonProps> = ({
  elevated = false,
  icon = undefined,
  label,
  onClick,
  variant = ButtonVariants.contained,
}) => {
  return (
    <MUIButton
      color="primary"
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