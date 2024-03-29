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
  badge,
  callback,
  data,
  dataCallbackOptions,
  dataCy: externalDataCy,
  disabled: externalDisabled,
  hidden,
  icon: externalIcon,
  label,
  position,
  tooltip,
  style: externalStyle,
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

  const global = useMemo(() => position === "icon" || position === "toolbar", [position]);

  const style = useMemo((): CSSProperties => ({ ...externalStyle, margin: "0 4px" }), [externalStyle]);

  const onClick = useCallback(
    () => callback(!global ? data : undefined, dataCallbackOptions),
    [callback, data, dataCallbackOptions, global]
  );

  if (hidden) {
    return null;
  }

  if (secondary) {
    return (
      <IconButton
        badge={badge}
        dataCy={dataCy}
        disabled={disabled}
        icon={icon as IIconElement}
        onClick={onClick}
        style={style}
        tooltip={tooltip || label}
      />
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
