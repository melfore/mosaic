import { Meta, StoryObj } from "@storybook/react";
import { configure } from "@storybook/test";

import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";
import FormDecorator from "../../utils/stories/decorators/Form";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedCheckbox, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "Checkbox";
LocalizedCheckbox.displayName = COMPONENT_NAME;

const meta = {
  title: "Inputs/Checkbox",
  component: LocalizedCheckbox,
  decorators: [FormDecorator, LocaleDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Checkbox Component",
          url: "https://mui.com/components/checkboxes/",
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
        component: "The Checkbox component is used to select one or more items from a list.",
      },
    },
  },
} satisfies Meta<typeof LocalizedCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Intermediate: Story = {
  args: {
    ...Primary.args,
    intermediate: true,
  },
};

export const Label: Story = {
  args: {
    ...Primary.args,
    label: "Checkbox",
  },
};

export const LabelEnd: Story = {
  args: {
    ...Label.args,
    labelPlacement: "end",
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    label: MessageMock.checkbox,
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
      backgroundColor: "red",
      color: "white",
    },
  },
};

export const Unchecked: Story = {
  args: {
    ...Primary.args,
    value: undefined,
  },
};
