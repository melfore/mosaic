import React, { CSSProperties, useMemo } from "react";
import { useTheme } from "@mui/material";

import { ILocalizable } from "../../../../types/Base";
import { BreadCrumbsLink, BreadCrumbsSize } from "../../../../types/BreadCrumbs";
import { ITypographyVariants } from "../../../../types/Typography";
import IconWrapper from "../../../IconWrapper";
import Typography from "../../../Typography";

interface BreadCrumbsItemProps extends ILocalizable {
  link: BreadCrumbsLink;
  size: BreadCrumbsSize;
  variant: ITypographyVariants;
}

const BreadCrumbsItem = ({ dataCy, link: { icon, label }, localized, size, variant }: BreadCrumbsItemProps) => {
  const theme = useTheme();

  const iconStyle = useMemo(
    (): CSSProperties => ({
      marginRight: theme.spacing(1),
    }),
    [theme]
  );

  const inlineFlexStyle = useMemo(
    (): CSSProperties => ({
      alignItems: "center",
      display: "flex",
    }),
    []
  );

  return (
    <div data-cy={dataCy} style={inlineFlexStyle}>
      {icon && <IconWrapper dataCy={`${dataCy}-icon`} icon={icon} size={size} style={iconStyle} />}
      <Typography dataCy={`${dataCy}-label`} localized={localized} variant={variant}>
        {label}
      </Typography>
    </div>
  );
};

export default BreadCrumbsItem;
