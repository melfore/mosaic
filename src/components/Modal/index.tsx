import React, { FC } from "react";
import MUIDialog from "@material-ui/core/Dialog";
import MUIDialogActions from "@material-ui/core/DialogActions";
import MUIDialogContent from "@material-ui/core/DialogContent";
import MUIDialogTitle from "@material-ui/core/DialogTitle";
import { styled } from "@material-ui/core/styles";
import Button, { ButtonIntl } from "../Button";
import Icon from "../Icon";
import IconButton from "../IconButton";
import Typography from "../Typography";
import { BaseIntlType } from "../../types/Base";
import { Icons, IconSize } from "../../types/Icon";
import { ModalActionType, ModalType, ModalSize } from "../../types/Modal";
import { TypographyVariants } from "../../types/Typography";
import withIntl from "../../utils/hocs/withIntl";

const StyledMUIDialogTitle = styled(MUIDialogTitle)({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
});

const getActionButton = <T extends ModalActionType>(buttonConfig: T): any => {
  const { action, label, labelId, ...props } = buttonConfig;
  const onClickHandler = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    action && action();
  };

  if (!labelId) {
    return <Button {...props} label={label} onClick={onClickHandler} />;
  }

  return <ButtonIntl {...props} labelId={labelId} onClick={onClickHandler} />;
};

const onCloseWrapper = (event: any, reason?: string, onClose?: Function) => {
  event.preventDefault();
  event.stopPropagation();
  onClose && onClose(reason);
};

/**
 * Modal component made on top of `@material-ui/core/Dialog`
 */
const Modal: FC<ModalType> = ({
  cancel = undefined,
  children,
  closable = false,
  confirm = undefined,
  label = "",
  onClose = undefined,
  open = false,
  size = ModalSize.default,
}) => {
  const hasActions = cancel || confirm;
  return (
    <MUIDialog
      aria-labelledby="modal-title"
      fullWidth
      maxWidth={size}
      onClose={(event, reason) => onCloseWrapper(event, reason, onClose)}
      open={open}
    >
      <StyledMUIDialogTitle id="modal-title" disableTypography>
        <Typography bottomSpacing={false} dataCy="modal-title" label={label} variant={TypographyVariants.title} />
        {closable && (
          <IconButton
            icon={Icons.close}
            size={IconSize.small}
            onClick={(event) => onCloseWrapper(event, undefined, onClose)}
          />
        )}
      </StyledMUIDialogTitle>
      <MUIDialogContent dividers>{children}</MUIDialogContent>
      {hasActions && (
        <MUIDialogActions>
          {cancel && getActionButton(cancel)}
          {confirm && getActionButton(confirm)}
        </MUIDialogActions>
      )}
    </MUIDialog>
  );
};

export const ModalIntl: FC<ModalType & BaseIntlType> = withIntl(Modal);

export default Modal;
