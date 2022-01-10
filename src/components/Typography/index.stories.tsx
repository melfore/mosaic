import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import Typography, { DATA_CY_DEFAULT, LOCALIZABLE_PROPS, TypographyWithProps } from ".";

const COMPONENT_NAME = "Typography";
Typography.displayName = COMPONENT_NAME;
TypographyWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Display/Typography",
  component: TypographyWithProps,
  decorators: [localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Typography Component",
          url: "https://v4.mui.com/components/typography/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
    },
  },
} as ComponentMeta<typeof TypographyWithProps>;

const Template: ComponentStory<typeof TypographyWithProps> = (args) => (
  <Typography {...args} dataCy={DATA_CY_DEFAULT} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Text example",
};

export const BottomSpacing = Template.bind({});
BottomSpacing.args = {
  ...Primary.args,
  bottomSpacing: true,
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  ...Primary.args,
  children: (
    <span>
      <b>Strong</b> text
    </span>
  ),
};

export const DisplayBlock = Template.bind({});
DisplayBlock.args = {
  ...Primary.args,
  display: "block",
};

export const DisplayInline = Template.bind({});
DisplayInline.args = {
  ...Primary.args,
  display: "inline",
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  loading: true,
};

export const Truncated = Template.bind({});
Truncated.args = {
  ...Primary.args,
  truncated: true,
};

export const VariantBody = Template.bind({});
VariantBody.args = {
  ...Primary.args,
  variant: "body",
};

export const VariantCaption = Template.bind({});
VariantCaption.args = {
  ...Primary.args,
  variant: "caption",
};

export const VariantLabel = Template.bind({});
VariantLabel.args = {
  ...Primary.args,
  variant: "label",
};

export const VariantOverline = Template.bind({});
VariantOverline.args = {
  ...Primary.args,
  variant: "overline",
};

export const VariantPagetitle = Template.bind({});
VariantPagetitle.args = {
  ...Primary.args,
  variant: "pagetitle",
};

export const VariantTitle = Template.bind({});
VariantTitle.args = {
  ...Primary.args,
  variant: "title",
};
