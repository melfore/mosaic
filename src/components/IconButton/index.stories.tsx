import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { expect, jest } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { configure, userEvent, within } from "@storybook/testing-library";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { logInfo } from "../../utils/logger";
import getDocsPage from "../../utils/stories";

import IconButton, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = IconButton.displayName!;

const meta = {
  title: "Inputs/IconButton",
  component: IconButton,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Button Component",
          url: "https://mui.com/material-ui/react-button/#icon-button",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
      }),
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClickMock = jest.fn(() => logInfo(COMPONENT_NAME, "onClick handler"));

export const Primary: Story = {
  args: {
    icon: Icons.add,
    onClick: onClickMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId(DATA_CY_DEFAULT);
    if (button) {
      await userEvent.click(button);
      await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);
    }
  },
};

export const Badge: Story = {
  args: {
    ...Primary.args,
    badge: {
      color: "secondary",
      value: "8",
    },
  },
};

export const CustomIcon = {
  args: {
    icon: <MUIStyleIcon />,
  },
};

export const Disabled = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Rotate = {
  args: {
    ...Primary.args,
    rotate: true,
  },
};

export const SizeLarge = {
  args: {
    ...Primary.args,
    size: "large",
  },
};

export const SizeSmall = {
  args: {
    ...Primary.args,
    size: "small",
  },
};

export const Styled = {
  args: {
    ...Primary.args,
    style: {
      backgroundColor: "red",
      color: "white",
    },
  },
};

export const Tooltip = {
  args: {
    ...Primary.args,
    tooltip: "Add",
  },
};
