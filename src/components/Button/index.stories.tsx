import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import Button, { ButtonWithProps, DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

const COMPONENT_NAME = "Button";
Button.displayName = COMPONENT_NAME;
ButtonWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Inputs/Button",
  component: ButtonWithProps,
  decorators: [localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Button Component",
          url: "https://mui.com/components/buttons/",
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
} as ComponentMeta<typeof ButtonWithProps>;

const Template: ComponentStory<typeof ButtonWithProps> = (args) => <Button {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const Elevated = Template.bind({});
Elevated.args = {
  ...Primary.args,
  elevated: true,
};

export const Icon = Template.bind({});
Icon.args = {
  ...Primary.args,
  icon: {
    name: Icons.send,
  },
};

export const IconCustom = Template.bind({});
IconCustom.args = {
  ...Primary.args,
  icon: {
    component: <MUIStyleIcon />,
  },
};

export const IconRight = Template.bind({});
IconRight.args = {
  ...Primary.args,
  icon: {
    name: Icons.send,
    position: "right",
  },
};

export const IconRotate = Template.bind({});
IconRotate.args = {
  ...Disabled.args,
  icon: {
    name: Icons.refresh,
    rotate: true,
  },
  label: "Loading",
};

export const Styled = Template.bind({});
Styled.args = {
  ...Primary.args,
  style: {
    backgroundColor: "red",
    color: "white",
  },
};

export const VariantOutlined = Template.bind({});
VariantOutlined.args = {
  ...Primary.args,
  variant: "outlined",
};
