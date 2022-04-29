import React, { FC, Fragment, useMemo } from "react";
import { ListSubheader as MUIListSubheader, useTheme } from "@material-ui/core";
import { AutocompleteRenderGroupParams as MUIAutocompleteRenderGroupParams } from "@material-ui/lab";

import { IBase } from "../../../../types/Base";
import { getComposedDataCy, ISubpart } from "../../../../utils";

interface ISelectGroup extends IBase {
  forwarded: MUIAutocompleteRenderGroupParams;
  getGroupLabel?: (groupName: string) => string;
}

export const SELECT_GROUP_SUBPART: ISubpart = {
  label: "Option Group (with label)",
  value: (label = "{label}") => `option-group-${label}`,
};

const SelectGroup: FC<ISelectGroup> = ({
  dataCy = "select-group",
  forwarded: { children, group, key },
  getGroupLabel,
}) => {
  const theme = useTheme();

  const groupLabel = useMemo(() => (getGroupLabel ? getGroupLabel(group) : group), [getGroupLabel, group]);

  const groupDataCy = useMemo(() => getComposedDataCy(dataCy, SELECT_GROUP_SUBPART, groupLabel), [dataCy, groupLabel]);

  const style = useMemo(() => ({ backgroundColor: theme.palette.background.default }), [theme]);

  return (
    <Fragment key={`group-${key}`}>
      <MUIListSubheader data-cy={groupDataCy} style={style}>
        {groupLabel}
      </MUIListSubheader>
      {children}
    </Fragment>
  );
};

export default SelectGroup;
