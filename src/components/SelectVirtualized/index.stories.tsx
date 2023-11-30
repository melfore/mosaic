/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { getAllComposedDataCy } from "../../utils";
import FormDecorator from "../../utils/mocks/FormDecorator";
import { localeDecorator, MessageMock } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";
import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SelectVirtualized, SUBPARTS_MAP } from "../Select";

const COMPONENT_NAME = "Select";
(SelectVirtualized as any).displayName = COMPONENT_NAME;

const meta = {
  title: "Inputs/SelectVirtualized",
  component: SelectVirtualized,
  decorators: [FormDecorator, localeDecorator],
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
    },
  },
} satisfies Meta<typeof SelectVirtualized>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Select",
    multiple: false,
    onChange: () => {},
    onClose: () => {},
    onInputChange: () => {},
    onScrollEnd: () => {},
    options: ["Paintings", "Sculpture", "Mosaic", "Murales", "Photography"],
    placeholder: "Select a value",
    virtualized: true,
  },
};

export const Autocomplete: Story = {
  args: {
    ...Primary.args,
    autoComplete: false,
  },
};

export const AutoSort: Story = {
  args: {
    ...Primary.args,
    autoSort: true,
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
};

export const GroupedCustomLabel: Story = {
  args: {
    ...Grouped.args,
    getGroupLabel: (groupName) => `Letter: ${groupName}`,
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
};

export const OptionCustomRendering: Story = {
  args: {
    ...Primary.args,
    customOptionRendering: (option) => <b>{(option as string).slice(0, 3).toUpperCase()}</b>,
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

const options1000: string[] = [];
for (let i = 0; i < 1000; i++) {
  options1000.push(i + 1 + " Element");
}

export const VirtualizedListOf1000Elements: Story = {
  args: {
    ...Primary.args,
    options: options1000,
  },
};
