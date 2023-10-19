import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { localeDecorator, MessageMock } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";
import Icon from "../Icon";
import Typography from "../Typography";

import AppBar, { AppBarWithProps, DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

const COMPONENT_NAME = "AppBar";
AppBar.displayName = COMPONENT_NAME;
AppBarWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Surfaces/AppBar",
  component: AppBarWithProps,
  decorators: [localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI AppBar Component",
          url: "https://mui.com/components/app-bar/",
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
      tooltip: "Settings",
    },
  ],
  menu: {
    icon: Icons.home,
    onClick: () => {},
    tooltip: "Home",
  },
  title: "AppBar",
};

export const Actions = Template.bind({});
Actions.args = {
  ...Primary.args,
  actions: [
    {
      badge: {
        color: "error",
        value: "5",
      },
      icon: Icons.notifications,
      onClick: () => {},
      tooltip: "Notifications",
    },
    {
      icon: Icons.mail,
      onClick: () => {},
      tooltip: "Mail",
    },
    {
      icon: Icons.settings,
      onClick: () => {},
      tooltip: "Settings",
    },
  ],
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  ...Primary.args,
  children: (
    <div style={{ alignItems: "center", display: "flex" }}>
      <Typography>Home</Typography>
      <Icon name={Icons.right} />
      <Typography>Section</Typography>
      <Icon name={Icons.right} />
      <Typography>Detail</Typography>
    </div>
  ),
  onTitleClick: undefined,
  title: undefined,
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

export const Localized = Template.bind({});
Localized.args = {
  ...Primary.args,
  localized: true,
  title: MessageMock.title,
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
