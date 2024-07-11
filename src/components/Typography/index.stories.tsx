import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import getDocsPage from "../../utils/stories";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";

import Typography, { DATA_CY_DEFAULT, LOCALIZABLE_PROPS } from ".";

const COMPONENT_NAME = "Typography";
Typography.displayName = COMPONENT_NAME;

const meta = {
  title: "Display/Typography",
  component: Typography,
  decorators: [LocaleDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Typography Component",
          url: "https://mui.com/components/typography/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
      description: {
        component: "The Typography component is used to render text with different styles.",
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text example",
  },
};

export const BottomSpacing: Story = {
  args: {
    ...Primary.args,
    bottomSpacing: true,
  },
};

export const CustomContent: Story = {
  args: {
    ...Primary.args,
    children: (
      <span>
        <b>Strong</b> text
      </span>
    ),
  },
};

export const DisplayBlock: Story = {
  args: {
    ...Primary.args,
    display: "block",
  },
};

export const DisplayInline: Story = {
  args: {
    ...Primary.args,
    display: "inline",
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    children: MessageMock.typography,
    content: MessageMock.typography,
  },
};

export const Truncated: Story = {
  args: {
    ...Primary.args,
    truncated: true,
  },
};

export const VariantBody: Story = {
  args: {
    ...Primary.args,
    variant: "body",
  },
};

export const VariantCaption: Story = {
  args: {
    ...Primary.args,
    variant: "caption",
  },
};

export const VariantLabel: Story = {
  args: {
    ...Primary.args,
    variant: "label",
  },
};

export const VariantOverline: Story = {
  args: {
    ...Primary.args,
    variant: "overline",
  },
};

export const VariantPagetitle: Story = {
  args: {
    ...Primary.args,
    variant: "pagetitle",
  },
};

export const VariantTitle: Story = {
  args: {
    ...Primary.args,
    variant: "title",
  },
};
