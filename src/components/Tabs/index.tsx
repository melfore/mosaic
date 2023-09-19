import React, { FC } from "react";
import Box from "@mui/material/Box";
import MUITab from "@mui/material/Tab";
import MUITabs from "@mui/material/Tabs";

import { TabsType } from "../../types/Tabs";

export const DATA_CY_DEFAULT = "tabs";

const Tabs: FC<TabsType> = ({
  dataCy = DATA_CY_DEFAULT,
  labelList,
  color = "primary",
  orientation = "horizontal",
  style,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={orientation === "vertical" ? { display: "flex" } : { display: undefined }}>
      <MUITabs
        data-cy={dataCy}
        style={style}
        value={value}
        onChange={handleChange}
        textColor={color}
        indicatorColor={color}
        orientation={orientation}
        variant={orientation === "vertical" ? "standard" : "scrollable"}
        scrollButtons="auto"
      >
        {labelList.map((i, index) => {
          return <MUITab label={i.label} wrapped={i.wrapped} key={index} />;
        })}
      </MUITabs>

      <div
        role="tabpanel"
        id={`simple-tabpanel-${value}`}
        aria-labelledby={`${orientation}-tab-${value}`}
        style={{ width: "100%" }}
      >
        {labelList[value].content && labelList[value].content}
      </div>
    </Box>
  );
};

export default Tabs;
