/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { CSSProperties, FC, useMemo } from "react";

import { IBase } from "../../../../types/Base";
import { Icons } from "../../../../types/Icon";
import { ITableAction, ITableDataCallbackOptions } from "../../../../types/Table";
import { getComposedDataCy } from "../../../../utils";
import IconButton from "../../../IconButton";
import { DEFAULT_Z_INDEX } from "../../utils";

interface ITableRowAction extends IBase {
  action: ITableAction;
  data: any;
  dataCallbackOptions: ITableDataCallbackOptions;
  dataCy: string;
}

// TODO#lb: to be put at lowest level
const SUBPARTS_MAP = {
  action: {
    label: "Action (with label)",
    value: (label = "{label}") => `action-${label}`,
  },
};

const TableRowAction: FC<ITableRowAction> = ({ action, data, dataCallbackOptions, dataCy: externalDataCy }) => {
  const {
    badge,
    callback,
    disabled: actionDisabled,
    hidden,
    icon: actionIcon,
    label,
    tooltip,
    style: actionStyle,
  } = action;

  const dataCy = useMemo(() => getComposedDataCy(externalDataCy, SUBPARTS_MAP.action, label), [externalDataCy, label]);

  const disabled = useMemo(() => {
    if (!actionDisabled) {
      return false;
    }

    if (typeof actionDisabled === "boolean") {
      return true;
    }

    return actionDisabled(data, dataCallbackOptions);
  }, [actionDisabled, data, dataCallbackOptions]);

  const icon = useMemo(() => actionIcon || Icons.settings, [actionIcon]);

  const style = useMemo(
    (): CSSProperties => ({
      ...actionStyle,
      zIndex: DEFAULT_Z_INDEX,
    }),
    [actionStyle]
  );

  if (hidden) {
    return null;
  }

  return (
    <IconButton
      badge={badge}
      dataCy={dataCy}
      disabled={disabled}
      icon={icon}
      onClick={() => callback(data, dataCallbackOptions)}
      size="small"
      tooltip={tooltip || label}
      style={style}
    />
  );
};

export default TableRowAction;
