import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { configure, expect, fireEvent, fn, within } from "@storybook/test";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy, getComposedDataCy } from "../../utils";
import { logInfo } from "../../utils/logger";
import getDocsPage from "../../utils/stories";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";
import Icon from "../Icon";
import Typography from "../Typography";

import AppBar, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedAppBar, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "AppBar";
AppBar.displayName = COMPONENT_NAME;
LocalizedAppBar.displayName = COMPONENT_NAME;

const meta = {
  title: "Surfaces/AppBar",
  component: LocalizedAppBar,
  decorators: [LocaleDecorator],
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
      description: {
        component: "The AppBar is a surface that contains application navigation and other content.",
      },
    },
  },
} satisfies Meta<typeof LocalizedAppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const onActionMock = fn(() => logInfo(COMPONENT_NAME, "onAction handler"));
const onMenuMock = fn(() => logInfo(COMPONENT_NAME, "onMenu handler"));
const onLocaleMock = fn(() => logInfo(COMPONENT_NAME, "onLocale handler"));
const onTitleMock = fn(() => logInfo(COMPONENT_NAME, "onTitle handler"));
const onUserMock = fn(() => logInfo(COMPONENT_NAME, "onUser handler"));

export const Primary: Story = {
  args: {
    actions: [
      {
        icon: Icons.settings,
        onClick: onActionMock,
        tooltip: "Settings",
      },
    ],
    menu: {
      icon: Icons.home,
      onClick: onMenuMock,
      tooltip: "Home",
    },
    title: "AppBar",
  },
};

export const Actions: Story = {
  args: {
    ...Primary.args,
    actions: [
      {
        badge: {
          color: "error",
          value: "5",
        },
        icon: Icons.notifications,
        onClick: onActionMock,
        tooltip: "Notifications",
      },
      {
        icon: Icons.mail,
        onClick: onActionMock,
        tooltip: "Mail",
      },
      {
        icon: Icons.settings,
        onClick: onActionMock,
        tooltip: "Settings",
      },
    ],
  },
};

export const CustomContent: Story = {
  args: {
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
  },
};

export const Empty: Story = {
  args: {
    title: "Empty",
  },
};

export const Locale: Story = {
  args: {
    ...Primary.args,
    locale: {
      items: [
        {
          label: "English",
          value: "en",
        },
        {
          label: "Italian",
          value: "it",
        },
      ],
      label: "en",
      onItemClick: onLocaleMock,
    },
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    title: MessageMock.title,
  },
};

export const Styled: Story = {
  args: {
    ...Primary.args,
    style: {
      border: "2px solid #3f51b5",
      borderRadius: "4px",
      backgroundColor: "#6495ed",
    },
  },
};

export const TitleClickable: Story = {
  args: {
    onTitleClick: onTitleMock,
    title: "Title",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleClickable = canvas.getByTestId(getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.titleClickable));
    if (!titleClickable) {
      return;
    }

    fireEvent.click(titleClickable);
    await expect(onTitleMock).toHaveBeenCalledTimes(onTitleMock.mock.calls.length);
  },
};

export const Username: Story = {
  args: {
    ...Primary.args,
    user: {
      items: [
        {
          label: "View Details",
          onClick: onUserMock,
          value: "details",
        },
        {
          label: "Logout",
          onClick: onUserMock,
          value: "logout",
        },
      ],
      label: "mosaic@github",
    },
  },
};

export const UsernameIcon: Story = {
  args: {
    ...Primary.args,
    user: {
      items: [
        {
          label: "View Details",
          onClick: onUserMock,
          value: "details",
        },
        {
          label: "Logout",
          onClick: onUserMock,
          value: "logout",
        },
      ],
      label: "mosaic@github",
      type: "icon",
    },
  },
};

export const UserMenu: Story = {
  args: {
    ...Primary.args,
    userMenu: [{ label: "Logout", onClick: onUserMock }],
  },
};
