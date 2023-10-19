import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { getAllComposedDataCy } from "../../utils";
import { formDecorator } from "../../utils/mocks/FormMock";
import { localeDecorator, MessageMock } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import Checkbox, { CheckboxWithProps, DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

const COMPONENT_NAME = "Checkbox";
Checkbox.displayName = COMPONENT_NAME;
CheckboxWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Inputs/Checkbox",
  component: CheckboxWithProps,
  decorators: [formDecorator, localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Checkbox Component",
          url: "https://mui.com/components/checkboxes/",
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
} as ComponentMeta<typeof CheckboxWithProps>;

const Template: ComponentStory<typeof CheckboxWithProps> = (args) => <Checkbox {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  value: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const Intermediate = Template.bind({});
Intermediate.args = {
  ...Primary.args,
  intermediate: true,
};

export const Label = Template.bind({});
Label.args = {
  ...Primary.args,
  label: "Checkbox",
};

export const LabelEnd = Template.bind({});
LabelEnd.args = {
  ...Label.args,
  labelPlacement: "end",
};

export const Localized = Template.bind({});
Localized.args = {
  ...Primary.args,
  localized: true,
  label: MessageMock.checkbox,
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
    backgroundColor: "red",
    color: "white",
  },
};
