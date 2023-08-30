import React, { FC, PropsWithChildren, useMemo } from "react";

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
      <div style={{ marginBottom: 40, marginTop: 10 }}>{children}</div>
      <Tabs data-cy={dataCy} labelList={labelList} color={color} orientation={autoOrientation} style={style} />
    </Modal>
  );
};

export default ModalWithTabs;
