import React, { FC } from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link } from "@mui/material";

import { BreadCrumbsType } from "../../types/BreadCrumbs";
import Typography from "../Typography";

export const DATA_CY_DEFAULT = "bredCrumbs";

const BreadCrumbs: FC<BreadCrumbsType> = ({ dataCy = DATA_CY_DEFAULT, link, onClick }) => {
  return (
    <MUIBreadcrumbs data-cy={dataCy} aria-label="breadcrumb">
      {link.map((i, index) => {
        return link.length - 1 !== index ? (
          <Link underline="hover" color="inherit" onClick={() => onClick(i.href)}>
            {i.label}
          </Link>
        ) : (
          <Typography>{i.label}</Typography>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default BreadCrumbs;
