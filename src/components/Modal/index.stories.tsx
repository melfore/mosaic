import { Meta, StoryObj } from "@storybook/react";
import { configure } from "@storybook/test";

import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";
import ModalDecorator from "../../utils/stories/decorators/Modal";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedModal, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "Modal";
LocalizedModal.displayName = COMPONENT_NAME;

const meta = {
  title: "Feedback/Modal",
  component: LocalizedModal,
  decorators: [ModalDecorator, LocaleDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Dialog Component",
          url: "https://mui.com/components/dialogs/",
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
        component: "The Modal is a surface that contains application content.",
      },
    },
  },
} satisfies Meta<typeof LocalizedModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Modal Content",
    title: "Modal",
  },
};

export const Closeable: Story = {
  args: {
    ...Primary.args,
    closable: true,
  },
};

export const ActionCancel: Story = {
  args: {
    ...Closeable.args,
    cancel: { action: () => {}, label: "Cancel", variant: "outlined" },
  },
};

export const ActionConfirm: Story = {
  args: {
    ...Closeable.args,
    confirm: { action: () => {}, label: "Confirm" },
  },
};

export const Actions = {
  args: {
    ...Closeable.args,
    cancel: { action: () => {}, label: "Cancel", variant: "outlined" },
    confirm: { action: () => {}, label: "Confirm" },
  },
};

export const Localized = {
  args: {
    ...Primary.args,
    localized: true,
    title: MessageMock.title,
    cancel: {
      ...Actions.args.cancel!,
      label: MessageMock.cancel,
    },
    confirm: {
      ...Actions.args.confirm!,
      label: MessageMock.confirm,
    },
  },
};

export const SizeSmall = {
  args: {
    ...Closeable.args,
    size: "sm",
  },
};

export const SizeLarge = {
  args: {
    ...Closeable.args,
    size: "lg",
  },
};

export const SizeFullScreen = {
  args: {
    ...Closeable.args,
    size: "xl",
  },
};
