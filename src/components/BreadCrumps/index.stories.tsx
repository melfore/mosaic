import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import BreadCrumbs, { DATA_CY_DEFAULT } from ".";

const COMPONENT_NAME = "BreadCrumbs";
BreadCrumbs.displayName = COMPONENT_NAME;
//ProgressWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Navigation/BreadCrumbs",
  component: BreadCrumbs,
  decorators: [localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI BreadCrumbs Component",
          url: "https://mui.com/material-ui/react-progress/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
      }),
    },
  },
} as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => <BreadCrumbs {...args} dataCy={DATA_CY_DEFAULT} />;

export const Example = Template.bind({});
Example.args = {
  link: [
    {
      label: "page1",
      href: "",
    },
    {
      label: "page2",
      href: "",
    },
    {
      label: "page3",
      href: "",
    },
  ],
  onClick: () => {},
};
