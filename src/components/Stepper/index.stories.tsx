import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { localeDecorator } from "../../utils/mocks/LocaleMock";
import { stepperDecorator } from "../../utils/mocks/StepperMock";
import getDocsPage from "../../utils/stories";
import Progress from "../Progress";

import Stepper, { DATA_CY_DEFAULT } from ".";

const COMPONENT_NAME = "Stepper";
Stepper.displayName = COMPONENT_NAME;
//ProgressWithProps.displayName = COMPONENT_NAME;

export default {
  title: "Navigation/Stepper",
  component: Stepper,
  decorators: [stepperDecorator, localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Stepper Component",
          url: "https://mui.com/material-ui/react-progress/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: "stepper",
        },
      }),
    },
  },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} dataCy={DATA_CY_DEFAULT} />;

export const Primary = Template.bind({});
Primary.args = {
  stepList: [
    { label: "STEP1", content: "CONTENT PAGE 1" },
    { label: "STEP2", content: "CONTENT PAGE 2" },
    { label: "STEP3", content: <Progress type="Circular" /> },
  ],
  finishContent: "All Steps are completed",
};

export const ActiveStep = Template.bind({});
ActiveStep.args = { ...Primary.args, activeStep: 2 };
