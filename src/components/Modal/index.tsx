import React, { FC } from "react";
import MUIDialog from "@material-ui/core/Dialog";
import MUIDialogActions from "@material-ui/core/DialogActions";
import MUIDialogContent from "@material-ui/core/DialogContent";
import MUIDialogTitle from "@material-ui/core/DialogTitle";
import MUIIconButton from "@material-ui/core/IconButton";
import MUITypography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";
import Button, { ButtonIntl } from "../Button";
import Icon from "../Icon";
import { Icons } from "../../types/Icon";
import { ModalActionType, ModalType } from "../../types/Modal";

const StyledMUIDialogTitle = styled(MUIDialogTitle)({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
});

const getActionButton = <T extends ModalActionType>(buttonConfig: T, onClose?: Function): any => {
  const { action, label, labelId, ...props } = buttonConfig;
  const onClickHandler = (event: any) => {
    action && action(event);
    onClose && onClose(event);
  };

  if (!labelId) {
    return <Button {...props} label={label} onClick={onClickHandler} />;
  }

  return <ButtonIntl {...props} labelId={labelId} onClick={onClickHandler} />;
};

/**
 * Modal component made on top of `@material-ui/core/Dialog`
 */
const Modal: FC<ModalType> = ({
  cancel,
  children,
  closable = false,
  confirm,
  label,
  onClose = undefined,
  open = false,
}) => {
  const hasActions = cancel || confirm;
  return (
    <MUIDialog aria-labelledby="modal-title" fullWidth maxWidth="sm" onClose={onClose} open={open}>
      <StyledMUIDialogTitle id="modal-title" disableTypography>
        {/* TODO: see #68 */}
        <MUITypography variant="h6">{label}</MUITypography>
        {closable && (
          // TODO: see #69
          <MUIIconButton size="small" onClick={onClose}>
            <Icon name={Icons.close} />
          </MUIIconButton>
        )}
      </StyledMUIDialogTitle>
      <MUIDialogContent dividers>{children}</MUIDialogContent>
      {hasActions && (
        <MUIDialogActions>
          {cancel && getActionButton(cancel, onClose)}
          {confirm && getActionButton(confirm, onClose)}
        </MUIDialogActions>
      )}
    </MUIDialog>
  );
};

export default Modal;
