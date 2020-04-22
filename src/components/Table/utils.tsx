import React, { forwardRef, Fragment } from "react";
import { Action as MTActionType, Column as MTColumnType, Options as MTOptionsType } from "material-table";
import { Icons, IconSize } from "../../types/Icon";
import { TableActionScope, TableActionType, TableColumnType } from "../../types/Table";
import Button from "../Button";
import Icon from "../Icon";

// For default props refer to Options section here https://material-table.com/#/docs/all-props
export const DEFAULT_TABLE_OPTIONS: MTOptionsType = {
  debounceInterval: 500,
  draggable: false,
  emptyRowsWhenPaging: false,
};

export const actionAdapter = (action: TableActionType): MTActionType<object> => {
  const {
    callback,
    label,
    disabled = false,
    hidden = false,
    icon = undefined,
    scope = TableActionScope.default,
  } = action;
  return {
    disabled,
    hidden,
    icon: `${label}$${icon}`,
    isFreeAction: scope === TableActionScope.default,
    onClick: callback,
  };
};

export const actionComponentAdapter = (props: any) => {
  const { data, action } = props;
  // TODO#lb: when #69 gets deployed, use isFreeAction to render IconButton instead of Button
  const { disabled, hidden, icon, isFreeAction, onClick }: MTActionType<object> = action;
  if (hidden) {
    return null;
  }

  const labelAndIconName = icon as string;
  const label = labelAndIconName.split("$")[0];
  const iconName = labelAndIconName.split("$")[1] as Icons;
  const buttonIcon = !iconName ? undefined : { name: iconName };
  return (
    <Fragment>
      {isFreeAction && <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
      <Button
        disabled={disabled}
        icon={buttonIcon}
        label={label}
        onClick={(event: any) => {
          onClick(event, data);
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        My Button
      </Button>
      {!isFreeAction && <span>&nbsp;&nbsp;</span>}
    </Fragment>
  );
};

export const columnAdapter = (column: TableColumnType): MTColumnType<object> => {
  const { label, path, render } = column;
  return {
    field: path,
    render,
    title: label,
  };
};

export const iconAdapter = (name: Icons, size = IconSize.default) =>
  forwardRef((props: any, ref: any) => {
    return <Icon forwarded={{ ...props, ref }} name={name} size={size} />;
  });
