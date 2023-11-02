import React, { CSSProperties, FC, useMemo } from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link } from "@mui/material";

import { BreadCrumbsType } from "../../types/BreadCrumbs";
import { ITypographyVariants } from "../../types/Typography";
import { getComposedDataCy, ISubpartMap } from "../../utils";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";

import BreadCrumbsItem from "./components/Item";

export const DATA_CY_DEFAULT = "breadcrumbs";
export const DATA_CY_SHORTCUT = "breadcrumbs";

export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [{ name: "link.label", type: "any[]" }];

export const SUBPARTS_MAP: ISubpartMap = {
  links: {
    label: "Links (at index n)",
    value: (n = `{n}`) => `link-${n}`,
  },
};

const BreadCrumbs: FC<BreadCrumbsType> = ({
  dataCy = DATA_CY_DEFAULT,
  links,
  localized,
  onClick,
  size = "small",
  separator,
}) => {
  const inlineFlexStyle = useMemo(
    (): CSSProperties => ({
      alignItems: "center",
      display: "flex",
    }),
    []
  );

  const typographyVariant = useMemo((): ITypographyVariants => {
    switch (size) {
      case "small":
        return "label";
      case "medium":
        return "title";
      default:
        return "pagetitle";
    }
  }, [size]);

  return (
    <MUIBreadcrumbs data-cy={dataCy} aria-label="breadcrumb" separator={separator}>
      {links.map((link, index) => {
        const itemDataCy = getComposedDataCy(dataCy, SUBPARTS_MAP.links, index);

        if (index === links.length - 1) {
          return (
            <BreadCrumbsItem
              key={`link-item-${index}`}
              dataCy={itemDataCy}
              link={link}
              localized={localized}
              size={size}
              variant={typographyVariant}
            />
          );
        }

        return (
          <Link
            data-cy={itemDataCy}
            color="inherit"
            key={`link-item-${index}`}
            onClick={() => onClick(link.href)}
            style={inlineFlexStyle}
            underline="hover"
          >
            <BreadCrumbsItem
              dataCy={itemDataCy}
              link={link}
              localized={localized}
              size={size}
              variant={typographyVariant}
            />
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default localized(BreadCrumbs, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});
