import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
// import FormMock from "../../utils/mocks/FormMock";
// import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import getDocsPage from "../../utils/stories";

import InputText, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, InputTextWithProps, LOCALIZABLE_PROPS } from ".";

const COMPONENT_NAME = "InputText";
InputText.displayName = COMPONENT_NAME;
InputTextWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Inputs/InputText",
  component: InputTextWithProps,
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Text Field",
          url: "https://v4.mui.com/components/text-fields/",
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
} as ComponentMeta<typeof InputTextWithProps>;

const Template: ComponentStory<typeof InputTextWithProps> = (args) => <InputText {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  value: "Value",
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

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  ...Primary.args,
  multiline: {
    rows: 3,
    rowsMax: 5,
  },
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: "Label",
  placeholder: "Enter value...",
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
