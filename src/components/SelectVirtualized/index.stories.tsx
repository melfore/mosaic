import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ISelect } from "../../types/Select";
import { getAllComposedDataCy } from "../../utils";
import { formDecorator } from "../../utils/mocks/FormMock";
import { localeDecorator } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";

import SelectVirtual, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SelectWithProps, SUBPARTS_MAP } from ".";

const COMPONENT_NAME = "Select";
(SelectVirtual as any).displayName = COMPONENT_NAME;
(SelectWithProps as any).displayName = COMPONENT_NAME;

export default {
  title: "Inputs/SelectVirtual",
  component: SelectWithProps,
  decorators: [formDecorator, localeDecorator],
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
} as ComponentMeta<typeof SelectWithProps>;

const Template: ComponentStory<typeof SelectWithProps> = (args: ISelect<any>) => (
  <SelectVirtual {...args} dataCy={DATA_CY_DEFAULT} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Select",
  multiple: false,
  onChange: () => {},
  onClose: () => {},
  onInputChange: () => {},
  onScrollEnd: () => {},
  options: ["1 Paintings", "2 Sculpture", "3 Mosaic", "4 Murales"],
  placeholder: "Select a value",
};

export const Autocomplete = Template.bind({});
Autocomplete.args = {
  ...Primary.args,
  autoComplete: false,
};

export const AutoSort = Template.bind({});
AutoSort.args = {
  ...Primary.args,
  autoSort: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const Grouped = Template.bind({});
Grouped.args = {
  ...Primary.args,
  groupBy: (option) => (option as string).slice(0, 1),
};

export const GroupedCustomLabel = Template.bind({});
GroupedCustomLabel.args = {
  ...Grouped.args,
  getGroupLabel: (groupName) => `Letter: ${groupName}`,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  loading: true,
};

export const Multiple = Template.bind({});
Multiple.args = {
  ...Primary.args,
  multiple: true,
  value: [],
};

export const OptionCustomRendering = Template.bind({});
OptionCustomRendering.args = {
  ...Primary.args,
  customOptionRendering: (option) => <b>{(option as string).slice(0, 3).toUpperCase()}</b>,
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

export const Element1000 = Template.bind({});
const exArray: any[] = [];
for (let i = 0; i < 1000; i++) {
  exArray.push(i + 1 + " Element");
}
Element1000.args = {
  label: "Select",
  multiple: false,
  onChange: () => {},
  onClose: () => {},
  onInputChange: () => {},
  onScrollEnd: () => {},
  options: exArray,
  placeholder: "Select a value",
};
