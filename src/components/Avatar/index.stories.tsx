import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { Meta, StoryObj } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";

import Avatar, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const meta = {
  title: "Display/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Avatar Component",
          url: "https://mui.com/components/avatars/",
        },
        component: "Avatar",
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
      }),
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: Icons.add,
  },
};

export const CustomIcon: Story = {
  args: {
    ...Primary.args,
    icon: <MUIStyleIcon />,
  },
};

export const Image: Story = {
  args: {
    src: "//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roof_hafez_tomb.jpg/440px-Roof_hafez_tomb.jpg",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const LoadingVariant: Story = {
  args: {
    loading: true,
    variant: "square",
  },
};

export const Styled: Story = {
  args: {
    ...Primary.args,
    style: {
      backgroundColor: "red",
      color: "white",
    },
  },
};

export const Text: Story = {
  args: {
    text: "MO",
  },
};

export const VariantRounded: Story = {
  args: {
    ...Primary.args,
    variant: "rounded",
  },
};

export const VariantSquare: Story = {
  args: {
    ...Primary.args,
    variant: "square",
  },
};
