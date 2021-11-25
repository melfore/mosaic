import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";

import AppBar, { AppBarWithProps, DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

const COMPONENT_NAME = "AppBar";
AppBar.displayName = COMPONENT_NAME;
AppBarWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Surfaces/AppBar",
  component: AppBarWithProps,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI AppBar Component",
          url: "https://v4.mui.com/components/app-bar/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          dataCyShortcut: DATA_CY_SHORTCUT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
    },
  },
} as ComponentMeta<typeof AppBarWithProps>;

const Template: ComponentStory<typeof AppBarWithProps> = (args) => <AppBar {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  actions: [
    {
      icon: Icons.settings,
      onClick: () => {},
    },
  ],
  menu: {
    icon: Icons.home,
    onClick: () => {},
  },
  title: "AppBar",
};

export const Actions = Template.bind({});
Actions.args = {
  ...Primary.args,
  actions: [
    {
      icon: Icons.notifications,
      onClick: () => {},
    },
    {
      icon: Icons.mail,
      onClick: () => {},
    },
    {
      icon: Icons.settings,
      onClick: () => {},
    },
  ],
};

export const Locale = Template.bind({});
Locale.args = {
  ...Primary.args,
  locale: {
    items: [
      { label: "English", value: "en" },
      { label: "Italian", value: "it" },
    ],
    label: "en",
    onItemClick: () => {},
  },
};

export const Styled = Template.bind({});
Styled.args = {
  ...Primary.args,
  style: {
    border: "2px solid #3f51b5",
    borderRadius: "4px",
    backgroundColor: "#6495ed",
  },
};

export const Username = Template.bind({});
Username.args = {
  ...Primary.args,
  user: {
    items: [
      { label: "View Details", onClick: () => {}, value: "details" },
      { label: "Logout", onClick: () => {}, value: "logout" },
    ],
    label: "mosaic@github",
  },
};
