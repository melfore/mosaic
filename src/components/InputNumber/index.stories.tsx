/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from "@storybook/react";
import { configure, expect, fn, userEvent, within } from "@storybook/test";

import { Icons } from "../../types/Icon";
import { logInfo } from "../../utils/logger";
import getDocsPage from "../../utils/stories";
import FormDecorator from "../../utils/stories/decorators/Form";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedInputNumber } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "InputNumber";
LocalizedInputNumber.displayName = "InputNumber";

const meta = {
  title: "Inputs/InputNumber",
  component: LocalizedInputNumber,
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
    },
  },
} satisfies Meta<typeof LocalizedInputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

const onChangeMock = fn((value?: any) => logInfo(COMPONENT_NAME, `onChange handler: value '${value}'`));

export const Primary: Story = {
  args: {
    label: "Label",
    maxValue: 100,
    minValue: 5,
    onChange: onChangeMock,
    value: 5,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const inputNumber = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!inputNumber) {
      return;
    }

    await step("Invalid chars", async () => {
      await userEvent.type(inputNumber, "e");
      await userEvent.type(inputNumber, "E");
      await userEvent.type(inputNumber, "+");
      await userEvent.type(inputNumber, "-");
      await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
      await userEvent.clear(inputNumber);
    });

    await step("Numeric chars", async () => {
      await userEvent.type(inputNumber, "9");
      await userEvent.type(inputNumber, "0");
      await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
      await expect(onChangeMock).toHaveBeenCalledWith(90);
      await userEvent.clear(inputNumber);
    });

    await step("Blur away", async () => {
      await userEvent.tab();
      await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
      await expect(onChangeMock).toHaveBeenCalledWith(90);
      await userEvent.clear(inputNumber);
    });

    await step("Higher than maxValue", async () => {
      await userEvent.type(inputNumber, "9");
      await userEvent.type(inputNumber, "0");
      await userEvent.type(inputNumber, "0");
      await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
      await expect(onChangeMock).toHaveBeenCalledWith(90);
      await userEvent.tab();
      await expect(onChangeMock).toHaveBeenCalledWith(100);
      await userEvent.clear(inputNumber);
    });

    await step("Lower than minValue", async () => {
      await userEvent.type(inputNumber, "1");
      await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
      await expect(onChangeMock).toHaveBeenCalledWith(1);
      await userEvent.tab();
      await expect(onChangeMock).toHaveBeenCalledWith(5);
      await userEvent.clear(inputNumber);
    });
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

export const Decimal: Story = {
  args: {
    ...Primary.args,
    integer: false,
    value: 5.275,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const inputNumber = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!inputNumber) {
      return;
    }

    await step("Numeric chars", async () => {
      await userEvent.clear(inputNumber);
      await userEvent.type(inputNumber, "5");
      await userEvent.type(inputNumber, ".");
      await userEvent.type(inputNumber, "5");
      await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
      await expect(onChangeMock).toHaveBeenCalledWith(5.5);
      await userEvent.clear(inputNumber);
    });
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
    label: MessageMock.inputNumber,
    placeholder: MessageMock.placeholder,
  },
};

export const MinMax: Story = {
  args: {
    ...Primary.args,
    maxValue: 1000,
    minValue: 20,
  },
};

export const Nullable: Story = {
  args: {
    ...Primary.args,
    value: null,
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
