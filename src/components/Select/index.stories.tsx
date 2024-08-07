import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { configure, expect, fireEvent, fn, screen, userEvent, within } from "@storybook/test";

import { getAllComposedDataCy } from "../../utils";
import { logInfo } from "../../utils/logger";
import getDocsPage from "../../utils/stories";
import FormDecorator from "../../utils/stories/decorators/Form";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedSelect, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "Select";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(LocalizedSelect as any).displayName = COMPONENT_NAME;

const meta = {
  title: "Inputs/Select",
  component: LocalizedSelect,
  decorators: [FormDecorator, LocaleDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Autocomplete Component",
          url: "https://mui.com/components/autocomplete/",
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
        component: "The Select component is used to select an option from a list of options.",
      },
    },
  },
} satisfies Meta<typeof LocalizedSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const onInputChangeMock = fn((value) => logInfo(COMPONENT_NAME, `onInputChange handler '${value || null}'`));
const onChangeMock = fn((value) => logInfo(COMPONENT_NAME, `onChange handler '${value || null}'`));
const onScrollEndMock = fn(() => logInfo(COMPONENT_NAME, `onScroll handler`));

const options: string[] = ["Paintings", "Sculpture", "Mosaic", "Murales", "Photography"];

export const Primary: Story = {
  args: {
    label: "Select",
    multiple: false,
    onClose: undefined,
    onInputChange: undefined,
    onScrollEnd: undefined,
    onChange: onChangeMock,
    options,
    placeholder: "Select a value",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!select) {
      return;
    }

    await userEvent.click(select);
    const listbox = within(screen.getByRole("presentation")).getByRole("listbox");
    const options = within(listbox).getAllByRole("option");
    fireEvent.click(options[1]);

    await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
  },
};

export const Autocomplete: Story = {
  args: {
    ...Primary.args,
    autoComplete: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!select) {
      return;
    }

    await userEvent.type(select, "M");
  },
};

export const AutocompleteChange: Story = {
  args: {
    ...Primary.args,
    autoComplete: false,
    onInputChange: onInputChangeMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!select) {
      return;
    }

    await userEvent.type(select, "M");
    await expect(onInputChangeMock).toHaveBeenCalledTimes(onInputChangeMock.mock.calls.length);
  },
};

export const AutoSort: Story = {
  args: {
    ...Primary.args,
    autoSort: "asc",
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Grouped: Story = {
  args: {
    ...Primary.args,
    groupBy: (option) => (option as string).slice(0, 1),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!select) {
      return;
    }

    await userEvent.click(select);
  },
};

export const GroupedCustomLabel: Story = {
  args: {
    ...Grouped.args,
    getGroupLabel: (groupName) => `Letter: ${groupName}`,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!select) {
      return;
    }

    await userEvent.click(select);
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    label: MessageMock.select,
    placeholder: MessageMock.placeholder,
  },
};

export const Multiple: Story = {
  args: {
    ...Primary.args,
    multiple: true,
    value: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!select) {
      return;
    }

    await userEvent.click(select);
    const listbox = within(screen.getByRole("presentation")).getByRole("listbox");
    const options = within(listbox).getAllByRole("option");
    fireEvent.click(options[1]);

    await expect(onChangeMock).toHaveBeenCalledTimes(onChangeMock.mock.calls.length);
  },
};

export const OnScrollEndCallback: Story = {
  args: {
    ...Primary.args,
    onScrollEnd: onScrollEndMock,
    options: [...options, ...options, ...options],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!select) {
      return;
    }

    await userEvent.click(select);
    const listbox = within(screen.getByRole("presentation")).getByRole("listbox");
    const scrollTop = listbox.scrollHeight - listbox.clientHeight - 0.5;
    logInfo("Select.fireScroll", `ch ${listbox.clientHeight} / st ${scrollTop} / sh ${listbox.scrollHeight}`);
    fireEvent.scroll(listbox, { target: { scrollTop } });

    await expect(onScrollEndMock).toHaveBeenCalledTimes(onScrollEndMock.mock.calls.length);
  },
};

export const OptionCustomLabel: Story = {
  args: {
    ...Primary.args,
    getOptionLabel: (option) => (option as string).slice(0, 3),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!select) {
      return;
    }

    await userEvent.click(select);
  },
};

export const OptionCustomRendering: Story = {
  args: {
    ...Primary.args,
    customOptionRendering: (option) => <b>{(option as string).slice(0, 3).toUpperCase()}</b>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!select) {
      return;
    }

    await userEvent.click(select);
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

export const Virtualized: Story = {
  args: {
    ...Primary.args,
    virtualized: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!select) {
      return;
    }

    await userEvent.click(select);
  },
};

const options1000: string[] = [];
for (let i = 0; i < 1000; i++) {
  options1000.push(i + 1 + " Element");
}

export const VirtualizedWith1000Elements: Story = {
  args: {
    ...Primary.args,
    options: options1000,
    virtualized: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId(DATA_CY_DEFAULT);
    if (!select) {
      return;
    }

    await userEvent.click(select);
  },
};
