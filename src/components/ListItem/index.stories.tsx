import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { Meta, StoryObj } from "@storybook/react";
import { configure, expect, fireEvent, fn, within } from "@storybook/test";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { logInfo } from "../../utils/logger";
import getDocsPage from "../../utils/stories";

import ListItem, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = ListItem.displayName!;

const meta = {
  title: "Display/ListItem",
  component: ListItem,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI ListItem Component",
          url: "https://mui.com/components/lists/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
      }),
      description: {
        component: "The ListItem component is used to display items in a list.",
      },
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClickMock = fn(() => logInfo(COMPONENT_NAME, "onClick handler"));

export const Primary: Story = {
  args: {
    content: "John Doe",
    onClick: undefined,
  },
};

export const Children: Story = {
  args: {
    ...Primary.args,
    children: "Collapisble Children",
    content: undefined,
  },
};

export const Clickable: Story = {
  args: {
    ...Primary.args,
    onClick: onClickMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const listItem = canvas.getByTestId(DATA_CY_DEFAULT);
    if (listItem) {
      fireEvent.click(listItem);
      await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);
    }
  },
};

export const Dense: Story = {
  args: {
    ...Primary.args,
    dense: true,
  },
};

export const Icon: Story = {
  args: {
    ...Primary.args,
    icon: Icons.account,
  },
};

export const IconCustom: Story = {
  args: {
    ...Primary.args,
    icon: <MUIStyleIcon />,
  },
};

export const IconLoading: Story = {
  args: {
    ...Icon.args,
    loading: true,
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
};

export const Selected: Story = {
  args: {
    ...Primary.args,
    selected: true,
  },
};
