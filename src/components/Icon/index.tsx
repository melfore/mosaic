import React, { cloneElement, FC, ReactElement, useMemo } from "react";
import { makeStyles } from "@material-ui/core";
import { Skeleton as MUISkeleton } from "@material-ui/lab";

import { IIcon, IIconDimensions, IRenderedIcon } from "../../types/Icon";
import { logWarn } from "../../utils/logger";

import { iconsCatalog } from "./utils";

export const DATA_CY_DEFAULT = "icon";

const ICON_DIMENSIONS: IIconDimensions = {
  small: 20,
  medium: 24,
  large: 35,
};

const useAnimations = makeStyles({
  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  rotate: {
    animation: "$rotate 2s linear infinite",
  },
});

const Icon: FC<IIcon> = ({
  children,
  dataCy = DATA_CY_DEFAULT,
  forwarded = {},
  loading = false,
  name,
  rotate = false,
  size = "medium",
  style: externalStyle,
}) => {
  const { rotate: rotateAnimation } = useAnimations();

  const dimensions = useMemo(() => {
    const dimension = ICON_DIMENSIONS[size];
    return { height: dimension, width: dimension };
  }, [size]);

  const props = useMemo(() => {
    let props: IRenderedIcon = {
      ...forwarded,
      "data-cy": dataCy,
      fontSize: size,
    };

    if (externalStyle) {
      props = { ...props, style: { ...externalStyle } };
    }

    if (children) {
      props = { ...props, style: { ...props.style, ...dimensions } };
    }

    if (rotate) {
      props = { ...props, className: rotateAnimation };
    }

    return props;
  }, [children, dataCy, dimensions, externalStyle, forwarded, rotate, rotateAnimation, size]);

  if (loading) {
    return <MUISkeleton variant="rect" style={{ ...dimensions }} />;
  }

  if (children) {
    return cloneElement(children as ReactElement<any>, { ...props });
  }

  if (!name) {
    logWarn("Icon", "Skip rendering, both children and name are not set");
    return null;
  }

  const icon = iconsCatalog[name];
  return cloneElement(icon, { ...props });
};

export default Icon;
