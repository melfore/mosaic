import React from "react";
import MUIStyleIcon from "@mui/icons-material/Style";
import { Meta, StoryObj } from "@storybook/react";
import { configure, expect, fireEvent, fn, within } from "@storybook/test";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import { logInfo } from "../../utils/logger";
import getDocsPage from "../../utils/stories";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedButton, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "Button";
LocalizedButton.displayName = COMPONENT_NAME;

const meta = {
  title: "Inputs/Button",
  component: LocalizedButton,
  decorators: [LocaleDecorator],
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
      description: {
        component: "The Button component can be used to trigger an action.",
      },
    },
  },
} satisfies Meta<typeof LocalizedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClickMock = fn(() => logInfo(COMPONENT_NAME, "onClick handler"));

export const Primary: Story = {
  args: {
    label: "Button",
    onClick: onClickMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!button) {
      return;
    }

    fireEvent.click(button);
    await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);

    fireEvent.blur(button);
  },
};

export const Color = {
  args: {
    ...Primary.args,
    color: "success",
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Elevated: Story = {
  args: {
    ...Primary.args,
    elevated: true,
  },
};

export const Icon: Story = {
  args: {
    ...Primary.args,
    icon: {
      name: Icons.send,
    },
  },
};

export const IconCustom: Story = {
  args: {
    ...Primary.args,
    icon: {
      component: <MUIStyleIcon />,
    },
  },
};

export const IconRight: Story = {
  args: {
    ...Primary.args,
    icon: {
      name: Icons.send,
      position: "right",
    },
  },
};

export const IconRotate: Story = {
  args: {
    ...Disabled.args,
    icon: {
      name: Icons.refresh,
      rotate: true,
    },
    label: "Loading",
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    label: MessageMock.button,
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

export const VariantOutlined: Story = {
  args: {
    ...Primary.args,
    variant: "outlined",
  },
};
