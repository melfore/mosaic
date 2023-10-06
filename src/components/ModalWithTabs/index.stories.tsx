import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import { modalDecorator } from "../../utils/mocks/ModalMock";
import getDocsPage from "../../utils/stories";
import Progress from "../Progress";

import ModalWithTabs, { DATA_CY_DEFAULT } from ".";

const COMPONENT_NAME = "ModalWithTabs";
ModalWithTabs.displayName = COMPONENT_NAME;

export default {
  title: "Navigation/ModalWithTabs",
  component: ModalWithTabs,
  decorators: [modalDecorator, localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
        },
      }),
    },
  },
} as ComponentMeta<typeof ModalWithTabs>;

const Template: ComponentStory<typeof ModalWithTabs> = (args) => <ModalWithTabs {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  labelList: [
    { label: "PAGE1", content: "PAGE1" },
    { label: "PAGE2", content: "PAGE2" },
    { label: "PAGE3", content: <Progress type="Linear" /> },
  ],
  children: "CONTENT SPACE",
};

export const Vertical = Template.bind({});
Vertical.args = { ...Primary.args, orientation: "vertical" };
