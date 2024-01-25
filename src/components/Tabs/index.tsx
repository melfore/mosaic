import React, { FC } from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import MUITab from "@mui/material/Tab";
import MUITabs from "@mui/material/Tabs";

import { TabsType } from "../../types/Tabs";

export const DATA_CY_DEFAULT = "tabs";

const Tabs: FC<TabsType> = ({
  dataCy = DATA_CY_DEFAULT,
  color = "primary",
  orientation = "horizontal",
  style,
  tabList,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const theme = useTheme();
  return (
    <Box sx={orientation === "vertical" ? { display: "flex" } : { display: undefined }}>
      <MUITabs
        data-cy={dataCy}
        style={style}
        value={value}
        onChange={handleChange}
        textColor="primary"
        TabIndicatorProps={{ style: { background: theme.palette[color].main } }}
        orientation={orientation}
        variant={orientation === "vertical" ? "standard" : "scrollable"}
        scrollButtons="auto"
      >
        {tabList.map((i, index) => {
          return (
            <MUITab
              label={i.label}
              wrapped={i.wrapped}
              key={index}
              disabled={i.disabled}
              style={{
                color: i.textColor
                  ? theme.palette[i.textColor].main
                  : value === index
                    ? theme.palette[color].main
                    : undefined,
              }}
            />
          );
        })}
      </MUITabs>

      <div
        role="tabpanel"
        id={`simple-tabpanel-${value}`}
        aria-labelledby={`${orientation}-tab-${value}`}
        style={{ width: "100%" }}
      >
        {tabList[value].content && tabList[value].content}
      </div>
    </Box>
  );
};

export default Tabs;
