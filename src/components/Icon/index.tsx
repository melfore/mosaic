import React, { FC, useMemo } from "react";
import { makeStyles } from "@material-ui/core";
import { Skeleton as MUISkeleton } from "@material-ui/lab";

import { IconSize, IIcon, IIconDimensions, IRenderedIcon } from "../../types/Icon";

import { iconsCatalog } from "./utils";

export const DATA_CY_DEFAULT = "icon";

const ICON_DIMENSIONS: IIconDimensions = {
  [IconSize.default]: 24,
  [IconSize.large]: 35,
  [IconSize.small]: 20,
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
  dataCy = DATA_CY_DEFAULT,
  forwarded = {},
  loading = false,
  name,
  rotate = false,
  size = IconSize.default,
  style: externalStyle,
}) => {
  const { rotate: rotateAnimation } = useAnimations();

  const dimension = useMemo(() => ICON_DIMENSIONS[size], [size]);

  const props = useMemo(() => {
    let props: IRenderedIcon = {
      ...forwarded,
      "data-cy": dataCy,
      fontSize: size,
      style: externalStyle,
    };

    if (rotate) {
      props = { ...props, className: rotateAnimation };
    }

    return props;
  }, [dataCy, externalStyle, forwarded, rotate, rotateAnimation, size]);

  if (loading) {
    return <MUISkeleton height={dimension} variant="rect" width={dimension} />;
  }

  const icon = iconsCatalog[name];
  return React.cloneElement(icon, { ...props });
};

export default Icon;
