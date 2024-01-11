import React, { cloneElement, FC, memo, PropsWithChildren, ReactElement, ReactNode, useCallback, useMemo } from "react";
import { Skeleton as MUISkeleton } from "@mui/material";
import { Box } from "@mui/system";

import { IIcon, IIconDimensions, IRenderedIcon } from "../../types/Icon";
import { logWarn } from "../../utils/logger";
import Adornment from "../Adornment";

import { iconsCatalog } from "./utils";

export const DATA_CY_DEFAULT = "icon";

const ICON_DIMENSIONS: IIconDimensions = {
  small: 20,
  medium: 24,
  large: 35,
};

const Icon: FC<PropsWithChildren<IIcon>> = ({
  badge,
  children,
  dataCy = DATA_CY_DEFAULT,
  forwarded = {},
  loading = false,
  name,
  rotate = false,
  size = "medium",
  style: externalStyle,
  tooltip,
}) => {
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

    return props;
  }, [children, dataCy, dimensions, externalStyle, forwarded, size]);

  const renderWithAnimation = useCallback(
    (element: ReactElement | ReactNode) => {
      return rotate ? (
        <Box
          sx={{
            animation: "spin 2s linear infinite",
            "@keyframes spin": {
              "0%": {
                transform: "rotate(360deg)",
              },
              "100%": {
                transform: "rotate(0deg)",
              },
            },
            width: dimensions.width,
            height: dimensions.width,
          }}
        >
          <Adornment badge={badge} tooltip={tooltip}>
            {cloneElement(element as ReactElement, { ...props })}
          </Adornment>
        </Box>
      ) : (
        <Adornment badge={badge} tooltip={tooltip}>
          {cloneElement(element as ReactElement, { ...props })}
        </Adornment>
      );
    },
    [badge, props, tooltip, rotate, dimensions]
  );

  if (loading) {
    return <MUISkeleton variant="rectangular" style={{ ...dimensions }} />;
  }

  if (children) {
    return renderWithAnimation(children);
  }

  if (!name) {
    logWarn("Icon", "Skip rendering, both children and name are not set");
    return null;
  }

  const icon = iconsCatalog[name];
  return renderWithAnimation(icon);
};

export default memo(Icon);
