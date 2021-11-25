import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";

import ListItemCollapsible, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

export default {
  title: "Display/ListItemCollapsible",
  component: ListItemCollapsible,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Collapse Component",
          url: "https://v4.mui.com/components/transitions/#collapse",
        },
        component: "ListItemCollapsible",
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
      }),
    },
  },
} as ComponentMeta<typeof ListItemCollapsible>;

const Template: ComponentStory<typeof ListItemCollapsible> = (args) => (
  <ListItemCollapsible {...args} dataCy={DATA_CY_DEFAULT} />
);

export const Primary = Template.bind({});
Primary.args = {
  content: "Collapsible Content",
  header: "Header",
};

export const Dense = Template.bind({});
Dense.args = {
  ...Primary.args,
  dense: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  loading: true,
};

export const Open = Template.bind({});
Open.args = {
  ...Primary.args,
  open: true,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Primary.args,
  selected: true,
};

// export const Basic = () => <ListItemCollapsible header={<Typography>Collapsible List Item</Typography>} />;

// export const CustomStyle = () => (
//   <ListItemCollapsible
//     header={<Typography>Custom Style</Typography>}
//     style={{ backgroundColor: "red", color: "white" }}
//   />
// );

// export const Dense = () => <ListItemCollapsible dense header={<Typography>Collapsible List Item</Typography>} />;

// export const Loading = () => <ListItemCollapsible loading header={<Typography>Collapsible List Item</Typography>} />;

// export const Selected = () => <ListItemCollapsible selected header={<Typography>Collapsible List Item</Typography>} />;

// export const Open = () => (
//   <ListItemCollapsible open selected header={<Typography>Collapsible List Item</Typography>}>
//     <div style={{ border: "1px solid #ccc", padding: "16px" }}>
//       <Typography children="Collapsible content is now expanded" />
//     </div>
//   </ListItemCollapsible>
// );
