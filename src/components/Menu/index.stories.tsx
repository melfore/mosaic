import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { Meta, StoryObj } from "@storybook/react";
import { configure, expect, fireEvent, fn, screen, within } from "@storybook/test";

import { logInfo } from "../../utils/logger";
import getDocsPage from "../../utils/stories";
import LocaleDecorator from "../../utils/stories/decorators/Locale";

import Menu, { DATA_CY_DEFAULT } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = Menu.displayName!;

const meta = {
  title: "Navigation/Menu",
  component: Menu,
  decorators: [LocaleDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Menu Component",
          url: "https://mui.com/material-ui/react-menu/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
      }),
      description: {
        component: "The Menu component is used to display a list of menu items.",
      },
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClickMock = fn(() => logInfo(COMPONENT_NAME, "onClick handler"));

const onItemClickMock = fn(() => logInfo(COMPONENT_NAME, "onClick item handler"));

export const Primary: Story = {
  args: {
    items: [
      { label: "Item1", onClick: onItemClickMock, value: "Value" },
      { label: "Item2", value: "Value" },
    ],
    label: "Label",
    onItemClick: onClickMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId(`${DATA_CY_DEFAULT}-button`);
    if (!button) {
      return;
    }

    fireEvent.click(button);
    await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);

    const listbox = within(screen.getByRole("presentation")).getByRole("menu");
    const options = within(listbox).getAllByRole("menuitem");
    fireEvent.click(options[0]);
    await expect(onItemClickMock).toHaveBeenCalledTimes(onItemClickMock.mock.calls.length);

    fireEvent.click(options[1]);
    await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);

    fireEvent.blur(button);
  },
};

export const CustomIcon: Story = {
  args: {
    ...Primary.args,
    icon: <MUIStyleIcon />,
  },
};

export const IconButton: Story = {
  args: {
    dataCy: "icon-menu",
    items: [{ label: "Item", value: "Value" }],
    label: "Label",
    onItemClick: onClickMock,
    type: "icon",
  },
};

export const CustomIconButton: Story = {
  args: {
    ...IconButton.args,
    icon: <MUIStyleIcon />,
  },
};
