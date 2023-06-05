import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { getAllComposedDataCy } from "../../utils";
import { formDecorator } from "../../utils/mocks/FormMock";
import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import Switch, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP, SwitchWithProps } from ".";

const COMPONENT_NAME = "Switch";
Switch.displayName = COMPONENT_NAME;
SwitchWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Inputs/Switch",
  component: SwitchWithProps,
  decorators: [formDecorator, localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Switch Component",
          url: "https://mui.com/components/switches/",
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
} as ComponentMeta<typeof SwitchWithProps>;

const Template: ComponentStory<typeof SwitchWithProps> = (args) => <Switch {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  value: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const DisableRipple = Template.bind({});
DisableRipple.args = {
  ...Primary.args,
  disableRipple: true,
};

export const Label = Template.bind({});
Label.args = {
  ...Primary.args,
  label: "Switch",
};

export const LabelEnd = Template.bind({});
LabelEnd.args = {
  ...Label.args,
  labelPlacement: "end",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...Primary.args,
  size: "small",
};

export const Styled = Template.bind({});
Styled.args = {
  ...Primary.args,
  style: {
    color: "red",
  },
};
