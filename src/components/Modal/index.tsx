import React, { FC, PropsWithChildren, useCallback, useMemo } from "react";
import {
  Dialog as MUIDialog,
  DialogActions as MUIDialogActions,
  DialogContent as MUIDialogContent,
  DialogTitle as MUIDialogTitle,
} from "@mui/material";

import { useMosaicContext } from "../..";
import { Icons } from "../../types/Icon";
import { IModal, IModalViewOptions } from "../../types/Modal";
import { getComposedDataCy, suppressEvent } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Button from "../Button";
import IconButton from "../IconButton";
import Typography from "../Typography";

export const DATA_CY_DEFAULT = "modal";
export const DATA_CY_SHORTCUT = "title";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "title", type: "string" },
  { name: "cancel.label", type: "any" },
  { name: "confirm.label", type: "any" },
];

export const SUBPARTS_MAP = {
  title: {
    label: "Title",
  },
  content: {
    label: "Content",
  },
  actionCancel: {
    label: "Action Cancel",
  },
  actionConfirm: {
    label: "Action Confirm",
  },
};

// TODO#lb: should handle style?
const Modal: FC<PropsWithChildren<IModal>> = ({
  cancel,
  children,
  closable = false,
  confirm,
  dataCy = DATA_CY_DEFAULT,
  onClose: externalOnClose,
  open = false,
  responsive = false,
  size = "md",
  title = "",
}) => {
  const {
    view: { mobile: mobileView },
  } = useMosaicContext();

  const hasActions = useMemo(() => cancel || confirm, [cancel, confirm]);

  const onClose = useCallback(
    (event?: any) => {
      if (event) {
        suppressEvent(event);
      }

      externalOnClose && externalOnClose();
    },
    [externalOnClose]
  );

  const viewOptions: IModalViewOptions = useMemo(() => {
    if (responsive) {
      return {
        fullScreen: size === "xl",
        maxWidth: size,
      };
    }

    return {
      fullScreen: mobileView || size === "xl",
      maxWidth: !mobileView ? size : undefined,
    };
  }, [mobileView, responsive, size]);

  return (
    <MUIDialog {...viewOptions} aria-labelledby="modal-title" data-cy={dataCy} fullWidth onClose={onClose} open={open}>
      <MUIDialogTitle
        id="modal-title"
        style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}
      >
        <Typography dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.title)} variant="caption">
          {title}
        </Typography>
        {closable && <IconButton icon={Icons.close} size="small" onClick={onClose} />}
      </MUIDialogTitle>
      <MUIDialogContent data-cy={getComposedDataCy(dataCy, SUBPARTS_MAP.content)} dividers>
        {children}
      </MUIDialogContent>
      {hasActions && (
        <MUIDialogActions>
          {cancel && (
            <Button
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.actionCancel)}
              disabled={cancel.disabled}
              label={cancel.label}
              onClick={cancel.action}
              style={cancel.style}
              variant={cancel.variant}
            />
          )}
          {confirm && (
            <Button
              dataCy={getComposedDataCy(dataCy, SUBPARTS_MAP.actionConfirm)}
              disabled={confirm.disabled}
              label={confirm.label}
              onClick={confirm.action}
              style={confirm.style}
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
