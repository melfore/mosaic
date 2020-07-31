import React, { FC } from "react";
import {
  Dialog as MUIDialog,
  DialogActions as MUIDialogActions,
  DialogContent as MUIDialogContent,
} from "@material-ui/core";
import Button from "../Button";
import IconButton from "../IconButton";
import Typography from "../Typography";
import { Icons, IconSize } from "../../types/Icon";
import { IModal, ModalSize } from "../../types/Modal";
import { TypographyVariants } from "../../types/Typography";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import { getDataCyForSubComponent } from "../../utils";
import { StyledMUIDialogTitle } from "./styled";

const onCloseWrapper = (event: any, reason?: string, onClose?: Function) => {
  event.preventDefault();
  event.stopPropagation();
  onClose && onClose(reason);
};

export const DATA_CY_DEFAULT = "modal";
export const DATA_CY_SHORTCUT = "title";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "title", type: "string" },
  { name: "cancel.label", type: "string" },
  { name: "confirm.label", type: "string" },
];

const Modal: FC<IModal> = ({
  cancel = undefined,
  children,
  closable = false,
  confirm = undefined,
  dataCy = DATA_CY_DEFAULT,
  localized,
  onClose = undefined,
  open = false,
  size = ModalSize.default,
  title = "",
}) => {
  const hasActions = cancel || confirm;
  return (
    <MUIDialog
      aria-labelledby="modal-title"
      data-cy={dataCy}
      fullWidth
      maxWidth={size}
      onClose={(event, reason) => onCloseWrapper(event, reason, onClose)}
      open={open}
    >
      <StyledMUIDialogTitle id="modal-title" disableTypography>
        <Typography
          dataCy={getDataCyForSubComponent(dataCy, DATA_CY_DEFAULT, "title")}
          localized={localized}
          variant={TypographyVariants.title}
        >
          {title}
        </Typography>
        {closable && (
          <IconButton
            icon={Icons.close}
            size={IconSize.small}
            onClick={(event) => onCloseWrapper(event, undefined, onClose)}
          />
        )}
      </StyledMUIDialogTitle>
      <MUIDialogContent data-cy={getDataCyForSubComponent(dataCy, DATA_CY_DEFAULT, "content")} dividers>
        {children}
      </MUIDialogContent>
      {hasActions && (
        <MUIDialogActions>
          {cancel && (
            <Button
              dataCy={getDataCyForSubComponent(dataCy, DATA_CY_DEFAULT, "action-cancel")}
              disabled={cancel.disabled}
              label={cancel.label}
              localized={localized}
              onClick={cancel.action}
              variant={cancel.variant}
            />
          )}
          {confirm && (
            <Button
              dataCy={getDataCyForSubComponent(dataCy, DATA_CY_DEFAULT, "action-confirm")}
              disabled={confirm.disabled}
              label={confirm.label}
              localized={localized}
              onClick={confirm.action}
              variant={confirm.variant}
            />
          )}
        </MUIDialogActions>
      )}
    </MUIDialog>
  );
};

export const ModalWithProps = Modal;

export default localized(Modal, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
