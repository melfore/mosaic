import React, { FC, PropsWithChildren, useMemo } from "react";
import { Grid } from "@mui/material";

import { useMosaicContext } from "../../hooks/useMosaicContext";
import { IModal } from "../../types/Modal";
import { TabsType } from "../../types/Tabs";
import Modal from "../Modal";
import Tabs from "../Tabs";

export const DATA_CY_DEFAULT = "modalwithtabs";

export type ModalWithTabsType = TabsType & IModal & {};

const ModalWithTabs: FC<PropsWithChildren<ModalWithTabsType>> = ({
  dataCy = DATA_CY_DEFAULT,
  labelList,
  color,
  orientation = "vertical",
  children,
  cancel,
  closable = false,
  confirm,
  onClose,
  open = false,
  responsive,
  size,
  title,
  style,
}) => {
  const {
    view: { tablet: tabletView },
  } = useMosaicContext();

  const autoOrientation = useMemo(() => {
    if (tabletView) {
      return "horizontal";
    }
    return orientation;
  }, [tabletView, orientation]);
  return (
    <Modal
      open={open}
      onClose={onClose}
      closable={closable}
      cancel={cancel}
      confirm={confirm}
      responsive={responsive}
      size={size}
      title={title}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} paddingBottom={2}>
          {children}
        </Grid>
        <Grid xs={12}>
          <Tabs data-cy={dataCy} labelList={labelList} color={color} orientation={autoOrientation} style={style} />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ModalWithTabs;
