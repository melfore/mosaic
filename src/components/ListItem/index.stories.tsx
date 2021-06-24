import React from "react";
import MUIStyleIcon from "@material-ui/icons/Style";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";
import Typography from "../Typography";

import ListItem, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

export default {
  title: "ListItem",
  component: ListItem,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/ListItem",
      component: "ListItem",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
        subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
      },
    }),
  },
};

export const Canvas = () => (
  <ListItem
    children={<span>List Item</span>}
    dataCy={text("dataCy", DATA_CY_DEFAULT)}
    dense={boolean("dense", false)}
    icon={select("icon", Icons, undefined)}
    loading={boolean("loading", false)}
    onClick={action("On ListItem click")}
    selected={boolean("selected", false)}
  />
);

export const Basic = () => (
  <ListItem>
    <Typography>Basic List Item</Typography>
  </ListItem>
);

export const CustomStyle = () => (
  <ListItem style={{ backgroundColor: "red", color: "white" }}>
    <Typography>Custom Style</Typography>
  </ListItem>
);

export const Dense = () => (
  <ListItem dense>
    <Typography>Basic List Item</Typography>
  </ListItem>
);

export const Loading = () => (
  <StoriesWrapper>
    <ListItem loading>
      <Typography>Basic List Item</Typography>
    </ListItem>
    <ListItem icon={Icons.add} loading>
      <Typography>Basic List Item</Typography>
    </ListItem>
  </StoriesWrapper>
);

export const Selected = () => (
  <ListItem selected>
    <Typography>Basic List Item</Typography>
  </ListItem>
);

export const Icon = () => (
  <ListItem icon={Icons.add}>
    <Typography>Basic List Item</Typography>
  </ListItem>
);

export const CustomIcon = () => (
  <ListItem icon={<MUIStyleIcon />}>
    <Typography>Basic List Item</Typography>
  </ListItem>
);
