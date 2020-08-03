import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";

import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";
import Typography from "../Typography";

import ListItemCollapsible, { DATA_CY_DEFAULT } from ".";

export default {
  title: "ListItemCollapsible",
  component: ListItemCollapsible,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/Collapse",
      component: "ListItemCollapsible",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
      },
    }),
  },
};

export const Canvas = () => (
  <ListItemCollapsible
    children={<span>Collapsible Content</span>}
    dataCy={text("dataCy", DATA_CY_DEFAULT)}
    dense={boolean("dense", false)}
    header={<span>Header</span>}
    loading={boolean("loading", false)}
    onClick={action("On ListItem click")}
    open={boolean("open", false)}
    openTimeout={select("openTimeout", ["auto", 1000, 5000], "auto")}
    selected={boolean("selected", false)}
    unmountContent={boolean("unmountContent", false)}
  />
);

export const Basic = () => (
  <StoriesWrapper>
    <ListItemCollapsible header={<Typography>Collapsible List Item</Typography>} />
  </StoriesWrapper>
);

export const Dense = () => (
  <StoriesWrapper>
    <ListItemCollapsible dense header={<Typography>Collapsible List Item</Typography>} />
  </StoriesWrapper>
);

export const Loading = () => (
  <StoriesWrapper>
    <ListItemCollapsible loading header={<Typography>Collapsible List Item</Typography>} />
  </StoriesWrapper>
);

export const Selected = () => (
  <StoriesWrapper>
    <ListItemCollapsible selected header={<Typography>Collapsible List Item</Typography>} />
  </StoriesWrapper>
);

export const Open = () => (
  <StoriesWrapper>
    <ListItemCollapsible open selected header={<Typography>Collapsible List Item</Typography>}>
      <div style={{ border: "1px solid #ccc", padding: "16px" }}>
        <Typography children="Collapsible content is now expanded" />
      </div>
    </ListItemCollapsible>
  </StoriesWrapper>
);
