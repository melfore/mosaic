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
        basedOn: {
          label: "MUI Tabs Component",
          url: "https://mui.com/material-ui/react-progress/",
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
} as ComponentMeta<typeof ModalWithTabsWithProps>;

const Template: ComponentStory<typeof ModalWithTabsWithProps> = (args) => (
  <ModalWithTabs {...args} dataCy={DATA_CY_DEFAULT} />
);

export const Primary = Template.bind({});
Primary.args = {
  labelList: [
    { label: "PAGE1", content: "PAGE1" },
    { label: "PAGE2", content: "PAGE2" },
    { label: "PAGE3", content: <Progress type="Linear" /> },
  ],
  children: "CONTENT SPACE",
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
