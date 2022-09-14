import React, { CSSProperties, FC, useCallback, useMemo } from "react";
import { useTheme } from "@mui/material";

import { getComposedDataCy, ISubpartMap, suppressEvent } from "../../../../utils";
import Typography from "../../../Typography";

export const APPBAR_TITLE_SUBPARTS: ISubpartMap = {
  titleClickable: {
    label: "Title Clickable",
  },
  titleText: {
    label: "Title Text",
  },
};

const DATA_CY_DEFAULT = "appbar-title";

const AppBarTitle: FC<any> = ({
  children,
  dataCy = DATA_CY_DEFAULT,
  onTitleClick: externalOnTitleClick,
  title: externalTitle,
}) => {
  const theme = useTheme();

  const titleClickableDataCy = useMemo(() => getComposedDataCy(dataCy, APPBAR_TITLE_SUBPARTS.titleClickable), [dataCy]);

  const titleTextDataCy = useMemo(() => getComposedDataCy(dataCy, APPBAR_TITLE_SUBPARTS.titleText), [dataCy]);

  const title = useMemo(() => {
    if (!externalTitle) {
      return null;
    }

    return (
      <Typography dataCy={titleTextDataCy} variant="title">
        {externalTitle}
      </Typography>
    );
  }, [externalTitle, titleTextDataCy]);

  const titleClickableStyle = useMemo(
    (): CSSProperties => ({
      borderRadius: `${theme.shape.borderRadius}px`,
      cursor: "pointer",
      padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
      userSelect: "none",
    }),
    [theme]
  );

  const onTitleClick = useCallback(
    (event) => {
      suppressEvent(event);
      externalOnTitleClick && externalOnTitleClick();
    },
    [externalOnTitleClick]
  );

  if (children) {
    return children;
  }

  if (!title) {
    return null;
  }

  if (!externalOnTitleClick) {
    return title;
  }

  return (
    <div data-cy={titleClickableDataCy} onClick={onTitleClick} style={titleClickableStyle}>
      {title}
    </div>
  );
};

export default AppBarTitle;
