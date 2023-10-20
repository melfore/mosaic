import React from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import BreadCrumbs, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS } from ".";

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
          url: "https://mui.com/material-ui/react-breadcrumbs/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          dataCyShortcut: DATA_CY_SHORTCUT,
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
    },
  },
} as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => <BreadCrumbs {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  links: [
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
};

export const SeparatorCustom = Template.bind({});
SeparatorCustom.args = { ...Primary.args, separator: "<" };

export const WithIcon = Template.bind({});
WithIcon.args = {
  links: [
    {
      label: "page1",
      href: "",
      icon: Icons.clock,
    },
    {
      label: "page2",
      href: "",
    },
    {
      label: "page3",
      href: "",
      icon: <AccessibilityIcon color="primary" />,
    },
  ],
  size: "medium",
};

export const Localized = Template.bind({});
Localized.args = {
  localized: true,
  links: [
    {
      label: "locale.page1",
      href: "",
    },
    {
      label: "locale.page2",
      href: "",
    },
    {
      label: "locale.page3",
      href: "",
    },
  ],
};
