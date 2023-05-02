import React, { cloneElement, FC, PropsWithChildren, ReactElement, useCallback, useMemo } from "react";
import { ClassNames } from "@emotion/react";
import { keyframes, Skeleton as MUISkeleton } from "@mui/material";

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

  const rotateKeyframes = useMemo(
    () => keyframes`
      from: {
        transform: "rotate(0deg)";
      }
      to: {
        transform: "rotate(360deg)";
      }
  `,
    []
  );

  const renderWithAnimation = useCallback(
    (element: any) => {
      return (
        <ClassNames>
          {({ css }) => {
            let animation = "none";
            if (rotate) {
              animation = css`
                ${rotateKeyframes} 2s linear infinite
              `;
            }

            let className = css`
              animation: ${animation};
            `;

            if (forwarded.className) {
              className = forwarded.className;
            }

            return (
              <Adornment badge={badge} tooltip={tooltip}>
                {cloneElement(element as ReactElement<any>, { ...props, className })}
              </Adornment>
            );
          }}
        </ClassNames>
      );
    },
    [badge, forwarded, props, rotate, rotateKeyframes, tooltip]
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

export default Icon;
