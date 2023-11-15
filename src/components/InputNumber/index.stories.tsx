import { expect, jest } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { configure, userEvent, within } from "@storybook/testing-library";

import { Icons } from "../../types/Icon";
import { logInfo } from "../../utils/logger";
import FormDecorator, { FormValue } from "../../utils/mocks/FormDecorator";
import { localeDecorator, MessageMock } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedInputNumber } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "InputNumber";
LocalizedInputNumber.displayName = COMPONENT_NAME;

const meta = {
  title: "Inputs/InputNumber",
  component: LocalizedInputNumber,
  decorators: [FormDecorator, localeDecorator],
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

let changesCount = 0;
const onChangeMock = jest.fn((value: FormValue) => {
  changesCount++;
  logInfo("InputNumber", `onChange handler: value '${value}' - changes '${changesCount}`);
});

export const Primary: Story = {
  args: {
    label: "Label",
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
    });

    // await step("NaN chars", async () => {
    //   await userEvent.type(inputNumber, "T");
    //   await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
    //   await expect(onChangeMock).toHaveBeenCalledWith(null);
    // });

    await step("Numeric chars", async () => {
      await userEvent.type(inputNumber, "0");
      await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
      await expect(onChangeMock).toHaveBeenCalledWith(50);
    });

    await step("Blur away", async () => {
      await userEvent.tab();
      await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
      await expect(onChangeMock).toHaveBeenCalledWith(50);
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
