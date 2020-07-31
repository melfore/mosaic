import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import { Icons } from "../../types/Icon";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";
import ListItem, { DATA_CY_DEFAULT } from ".";
import { Typography } from "../..";

export default {
  title: "ListItem",
  component: ListItem,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/ListItem",
      component: "ListItem",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
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
  <StoriesWrapper>
    <ListItem>
      <Typography>Basic List Item</Typography>
    </ListItem>
  </StoriesWrapper>
);

export const Dense = () => (
  <StoriesWrapper>
    <ListItem dense>
      <Typography>Basic List Item</Typography>
    </ListItem>
  </StoriesWrapper>
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
  <StoriesWrapper>
    <ListItem selected>
      <Typography>Basic List Item</Typography>
    </ListItem>
  </StoriesWrapper>
);

export const WithIcon = () => (
  <StoriesWrapper>
    <ListItem icon={Icons.add}>
      <Typography>Basic List Item</Typography>
    </ListItem>
  </StoriesWrapper>
);
