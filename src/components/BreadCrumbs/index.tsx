import React, { FC, useMemo } from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link } from "@mui/material";

import { BreadCrumbsType } from "../../types/BreadCrumbs";
import IconWrapper from "../IconWrapper";
import Typography from "../Typography";

export const DATA_CY_DEFAULT = "bredCrumbs";

const BreadCrumbs: FC<BreadCrumbsType> = ({ dataCy = DATA_CY_DEFAULT, link, onClick, size = "small", separator }) => {
  const typographySize = useMemo(() => {
    if (size === "small") {
      return "label";
    } else if (size === "medium") {
      return "title";
    }
    return "pagetitle";
  }, [size]);

  return (
    <MUIBreadcrumbs data-cy={dataCy} aria-label="breadcrumb" separator={separator}>
      {link.map((i, index) => {
        return link.length - 1 !== index ? (
          <Link
            key={index}
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            onClick={() => onClick(i.href)}
          >
            <Typography style={{ display: "flex", alignItems: "center" }} variant={typographySize}>
              {i.icon && <IconWrapper dataCy="icon" icon={i.icon} size={size} />}
              {i.label}
            </Typography>
          </Link>
        ) : (
          <Typography key={index} style={{ display: "flex", alignItems: "center" }} variant={typographySize}>
            {i.icon && <IconWrapper dataCy="icon" icon={i.icon} size="small" />}
            {i.label}
          </Typography>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default BreadCrumbs;
