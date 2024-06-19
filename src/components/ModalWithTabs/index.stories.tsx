import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { getAllComposedDataCy } from "../../utils";
import getDocsPage from "../../utils/stories";
import LocaleDecorator, { MessageMock } from "../../utils/stories/decorators/Locale";
import ModalDecorator from "../../utils/stories/decorators/Modal";
import Progress from "../Progress";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedModalWithTabs, SUBPARTS_MAP } from ".";

const COMPONENT_NAME = "ModalWithTabs";
LocalizedModalWithTabs.displayName = COMPONENT_NAME;

const meta = {
  title: "Navigation/ModalWithTabs",
  component: LocalizedModalWithTabs,
  decorators: [ModalDecorator, LocaleDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
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
} satisfies Meta<typeof LocalizedModalWithTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tabList: [
      { label: "PAGE 1", content: "PAGE 1 Content" },
      { label: "PAGE 2", content: <div>PAGE 2 Content</div> },
      { label: "PAGE 3", content: <Progress type="linear" /> },
    ],
    children: "Generic modal content not enclosed in Tabs...",
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    title: MessageMock.title,
  },
};

export const Vertical: Story = {
  args: {
    ...Primary.args,
    orientation: "vertical",
  },
};

export const Closeable: Story = {
  args: {
    ...Primary.args,
    closable: true,
  },
};
