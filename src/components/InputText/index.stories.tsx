/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from "@storybook/react";
import { configure, expect, fn, userEvent, within } from "@storybook/test";

import { Icons } from "../../types/Icon";
import { logInfo } from "../../utils/logger";
import getDocsPage from "../../utils/stories";
import FormDecorator from "../../utils/stories/decorators/Form";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedInputText } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "InputText";
LocalizedInputText.displayName = COMPONENT_NAME;

const meta = {
  title: "Inputs/InputText",
  component: LocalizedInputText,
  decorators: [FormDecorator, LocaleDecorator],
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
      description: {
        component: "The InputText is a text field component.",
      },
    },
  },
} satisfies Meta<typeof LocalizedInputText>;

export default meta;
type Story = StoryObj<typeof meta>;

const onChangeMock = fn((value: any) => logInfo(COMPONENT_NAME, `onChange handler: value '${value}'`));

export const Primary: Story = {
  args: {
    label: "Label",
    onChange: onChangeMock,
    value: "Value",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputText = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!inputText) {
      return;
    }

    await userEvent.type(inputText, "Changed");
    await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
    await expect(onChangeMock).toHaveBeenLastCalledWith("ValueChanged");
  },
};

export const Adornment: Story = {
  args: {
    ...Primary.args,
    adornment: {
      icon: Icons.close,
    },
  },
};

export const AdornmentClickable: Story = {
  args: {
    ...Primary.args,
    adornment: {
      icon: Icons.close,
      onClick: () => {},
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    label: MessageMock.inputText,
    placeholder: MessageMock.placeholder,
  },
};

export const Multiline: Story = {
  args: {
    ...Primary.args,
    multiline: {
      rows: 3,
      rowsMax: 5,
    },
  },
};

export const Placeholder: Story = {
  args: {
    label: "Label",
    placeholder: "Enter value...",
    value: undefined,
  },
};

export const Required: Story = {
  args: {
    ...Primary.args,
    required: true,
  },
};

export const SizeSmall: Story = {
  args: {
    ...Primary.args,
    size: "small",
  },
};

export const Styled: Story = {
  args: {
    ...Primary.args,
    style: {
      color: "red",
      fontWeight: "bold",
      fontSize: "large",
      textAlign: "center",
    },
  },
};

export const VariantFilled: Story = {
  args: {
    ...Primary.args,
    variant: "filled",
  },
};

export const VariantStandard: Story = {
  args: {
    ...Primary.args,
    variant: "standard",
  },
};
