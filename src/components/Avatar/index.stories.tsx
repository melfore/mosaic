import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { Meta, StoryObj } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";

import { DATA_CY_DEFAULT, MemoizedAvatar, SUBPARTS_MAP } from ".";

const COMPONENT_NAME = "Avatar";
MemoizedAvatar.displayName = COMPONENT_NAME;

const meta = {
  title: "Display/Avatar",
  component: MemoizedAvatar,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Avatar Component",
          url: "https://mui.com/components/avatars/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
      }),
      description: {
        component: "The Avatar component is used to display an image or initials.",
      },
    },
  },
} satisfies Meta<typeof MemoizedAvatar>;

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
