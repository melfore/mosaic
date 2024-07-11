import { Meta, StoryObj } from "@storybook/react";

import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";
import FormDecorator from "../../utils/stories/decorators/Form";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedSwitch, SUBPARTS_MAP } from ".";

const COMPONENT_NAME = "Switch";
LocalizedSwitch.displayName = COMPONENT_NAME;

const meta = {
  title: "Inputs/Switch",
  component: LocalizedSwitch,
  decorators: [FormDecorator, LocaleDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Switch Component",
          url: "https://mui.com/components/switches/",
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
        component: "The Switch is used to display a toggle switch.",
      },
    },
  },
} satisfies Meta<typeof LocalizedSwitch>;

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

export const DisableRipple: Story = {
  args: {
    ...Primary.args,
    disableRipple: true,
  },
};

export const Label: Story = {
  args: {
    ...Primary.args,
    label: "Switch",
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
    label: MessageMock.switch,
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
    },
  },
};
