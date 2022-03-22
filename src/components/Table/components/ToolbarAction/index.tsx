import React, { CSSProperties, FC, useCallback, useMemo } from "react";

import { IButtonIcon } from "../../../../types/Button";
import { Icons, IIconElement } from "../../../../types/Icon";
import { ITableToolbarAction } from "../../../../types/Table";
import { getComposedDataCy, ISubpart } from "../../../../utils";
import Button from "../../../Button";
import IconButton from "../../../IconButton";

const TOOLBAR_ACTION_SUBPART: ISubpart = {
  label: "Action (with label)",
  value: (label = "{label}") => `action-${label}`,
};

const TableToolbarAction: FC<ITableToolbarAction> = ({
  callback,
  data,
  dataCallbackOptions,
  dataCy: externalDataCy,
  disabled: externalDisabled,
  icon: externalIcon,
  index,
  label,
  position,
}) => {
  const dataCy = useMemo(
    () => getComposedDataCy(externalDataCy, TOOLBAR_ACTION_SUBPART, label),
    [externalDataCy, label]
  );

  const disabled = useMemo(
    () => (typeof externalDisabled === "function" ? externalDisabled(data, dataCallbackOptions) : externalDisabled),
    [data, dataCallbackOptions, externalDisabled]
  );

  const secondary = useMemo(() => position === "icon", [position]);

  const icon = useMemo(() => {
    if (secondary) {
      return externalIcon || Icons.settings;
    }

    if (typeof externalIcon === "string") {
      return { name: externalIcon };
    }

    return { component: externalIcon };
  }, [externalIcon, secondary]);

  const style = useMemo((): CSSProperties => ({ marginLeft: index > 0 ? "8px" : "none" }), [index]);

  const onClick = useCallback(() => callback(data, dataCallbackOptions), [callback, data, dataCallbackOptions]);

  if (secondary) {
    return (
      <IconButton dataCy={dataCy} disabled={disabled} icon={icon as IIconElement} onClick={onClick} style={style} />
    );
  }

  return (
    <Button
      dataCy={dataCy}
      disabled={disabled}
      icon={icon as IButtonIcon}
      label={label}
      onClick={onClick}
      style={style}
    />
  );
};

export default TableToolbarAction;
