import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { getAllComposedDataCy } from "../../utils";
import { modalDecorator } from "../../utils/mocks/ModalMock";
import getDocsPage from "../../utils/stories";

import Modal, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, ModalWithProps, SUBPARTS_MAP } from ".";

const COMPONENT_NAME = "Modal";
Modal.displayName = COMPONENT_NAME;
ModalWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Feedback/Modal",
  component: ModalWithProps,
  decorators: [modalDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Dialog Component",
          url: "https://v4.mui.com/components/dialogs/",
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
} as ComponentMeta<typeof ModalWithProps>;

const Template: ComponentStory<typeof ModalWithProps> = (args) => <Modal {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Modal Content",
  title: "Modal",
};

export const Closeable = Template.bind({});
Closeable.args = {
  ...Primary.args,
  closable: true,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...Closeable.args,
  size: "sm",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  ...Closeable.args,
  size: "lg",
};

export const SizeFullScreen = Template.bind({});
SizeFullScreen.args = {
  ...Closeable.args,
  size: "xl",
};

export const ActionCancel = Template.bind({});
ActionCancel.args = {
  ...Closeable.args,
  cancel: { action: () => {}, label: "Cancel", variant: "outlined" },
};

export const ActionConfirm = Template.bind({});
ActionConfirm.args = {
  ...Closeable.args,
  confirm: { action: () => {}, label: "Confirm" },
};

export const Actions = Template.bind({});
Actions.args = {
  ...Closeable.args,
  cancel: { action: () => {}, label: "Cancel", variant: "outlined" },
  confirm: { action: () => {}, label: "Confirm" },
};
