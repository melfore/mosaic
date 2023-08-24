import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { formDecorator } from "../../utils/mocks/FormMock";
import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import InputNumber, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, InputNumberWithProps, LOCALIZABLE_PROPS } from ".";

const COMPONENT_NAME = "InputNumber";
InputNumber.displayName = COMPONENT_NAME;
InputNumberWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Inputs/InputNumber",
  component: InputNumberWithProps,
  decorators: [formDecorator, localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Text Field",
          url: "https://mui.com/components/text-fields/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          dataCyShortcut: DATA_CY_SHORTCUT,
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
    },
  },
} as ComponentMeta<typeof InputNumberWithProps>;

const Template: ComponentStory<typeof InputNumberWithProps> = (args) => (
  <InputNumber {...args} dataCy={DATA_CY_DEFAULT} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  value: 5,
};

export const Adornment = Template.bind({});
Adornment.args = {
  ...Primary.args,
  adornment: {
    icon: Icons.close,
  },
};

export const AdornmentClickable = Template.bind({});
AdornmentClickable.args = {
  ...Primary.args,
  adornment: {
    icon: Icons.close,
    onClick: () => {},
  },
};

export const Decimal = Template.bind({});
Decimal.args = {
  ...Primary.args,
  integer: false,
  value: 5.275,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const MinMax = Template.bind({});
MinMax.args = {
  ...Primary.args,
  maxValue: 1000,
  minValue: 20,
};

export const Nullable = Template.bind({});
Nullable.args = {
  ...Primary.args,
  value: null,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: "Label",
  placeholder: "Enter value...",
  value: undefined,
};

export const Required = Template.bind({});
Required.args = {
  ...Primary.args,
  required: true,
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
    fontWeight: "bold",
    fontSize: "large",
    textAlign: "center",
  },
};

export const VariantFilled = Template.bind({});
VariantFilled.args = {
  ...Primary.args,
  variant: "filled",
};

export const VariantStandard = Template.bind({});
VariantStandard.args = {
  ...Primary.args,
  variant: "standard",
};
