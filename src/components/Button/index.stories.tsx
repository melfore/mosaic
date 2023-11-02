/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { expect, jest } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { configure, userEvent, within } from "@storybook/testing-library";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { localeDecorator, MessageMock } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import Button, { ButtonWithProps, DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

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
  onClick: jest.fn(),
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

export const Localized = Template.bind({});
Localized.args = {
  ...Primary.args,
  localized: true,
  label: MessageMock.button,
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

export const Color = Template.bind({});
Color.args = {
  ...Primary.args,
  color: "success",
};

export const OnClick = {
  args: {
    ...Primary.args,
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId(DATA_CY_DEFAULT));
    await expect(Primary.args?.onClick).toHaveBeenCalledTimes(1);
  },
};
