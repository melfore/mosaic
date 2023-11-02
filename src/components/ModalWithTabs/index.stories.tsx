import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { getAllComposedDataCy } from "../../utils";
import { localeDecorator, MessageMock } from "../../utils/mocks/LocaleMock";
import { modalDecorator } from "../../utils/mocks/ModalMock";
import getDocsPage from "../../utils/stories";
import Progress from "../Progress";

import ModalWithTabs, {
  DATA_CY_DEFAULT,
  DATA_CY_SHORTCUT,
  LOCALIZABLE_PROPS,
  ModalWithTabsWithProps,
  SUBPARTS_MAP,
} from ".";

const COMPONENT_NAME = "ModalWithTabs";
ModalWithTabs.displayName = COMPONENT_NAME;
ModalWithTabsWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Navigation/ModalWithTabs",
  component: ModalWithTabsWithProps,
  decorators: [modalDecorator, localeDecorator],
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
} as ComponentMeta<typeof ModalWithTabsWithProps>;

const Template: ComponentStory<typeof ModalWithTabsWithProps> = (args) => (
  <ModalWithTabs {...args} dataCy={DATA_CY_DEFAULT} />
);

export const Primary = Template.bind({});
Primary.args = {
  labelList: [
    { label: "PAGE 1", content: "PAGE 1 Content" },
    { label: "PAGE 2", content: <div>PAGE 2 Content</div> },
    { label: "PAGE 3", content: <Progress type="Linear" /> },
  ],
  children: "Generic modal content not enclosed in Tabs...",
};

export const Localized = Template.bind({});
Localized.args = {
  ...Primary.args,
  localized: true,
  title: MessageMock.title,
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...Primary.args,
  orientation: "vertical",
};
