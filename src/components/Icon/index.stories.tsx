import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { Meta, StoryObj } from "@storybook/react";

import { Icons } from "../../types/Icon";
import getDocsPage from "../../utils/stories";

import { DATA_CY_DEFAULT, MemoizedIcon } from ".";

const COMPONENT_NAME = "Icon";
MemoizedIcon.displayName = COMPONENT_NAME;

const meta = {
  title: "Display/Icon",
  component: MemoizedIcon,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Icon Component",
          url: "https://mui.com/components/icons/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
      }),
    },
  },
} satisfies Meta<typeof MemoizedIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: Icons.account,
  },
};

export const Badge: Story = {
  args: {
    ...Primary.args,
    badge: {
      color: "secondary",
      overlap: "rectangular",
      value: "5",
    },
  },
};

export const ForwardedProps: Story = {
  args: {
    ...Primary.args,
    forwarded: {
      className: "test-forward",
    },
  },
};

export const IconCustom: Story = {
  args: {
    children: <MUIStyleIcon />,
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
};

export const Rotate: Story = {
  args: {
    ...Primary.args,
    rotate: true,
  },
};

export const SizeSmall: Story = {
  args: {
    ...Primary.args,
    size: "small",
  },
};

export const SizeLarge: Story = {
  args: {
    ...Primary.args,
    size: "large",
  },
};

export const SkipRender: Story = {
  args: {},
};

export const Styled: Story = {
  args: {
    ...Primary.args,
    style: {
      backgroundColor: "red",
      borderRadius: "4px",
      color: "white",
      padding: "4px",
    },
  },
};

export const Tooltip: Story = {
  args: {
    ...Primary.args,
    tooltip: "Account",
  },
};
