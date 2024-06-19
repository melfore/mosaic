import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { configure, expect, fireEvent, fn, within } from "@storybook/test";

import { logInfo } from "../../utils/logger";
import getDocsPage from "../../utils/stories";
import LocaleDecorator from "../../utils/stories/decorators/Locale";
import StepperDecorator from "../../utils/stories/decorators/Stepper";
import Progress from "../Progress";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, localizedStepper } from ".";

const COMPONENT_NAME = "Stepper";
localizedStepper.displayName = COMPONENT_NAME;
//ProgressWithProps.displayName = COMPONENT_NAME;

configure({ testIdAttribute: "data-cy" });

const meta = {
  title: "Navigation/Stepper",
  component: localizedStepper,
  decorators: [StepperDecorator, LocaleDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Stepper Component",
          url: "https://mui.com/material-ui/react-stepper/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          dataCyShortcut: DATA_CY_SHORTCUT,
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
    },
  },
} satisfies Meta<typeof localizedStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClickMockBack = fn(() => logInfo(COMPONENT_NAME, "onClick handler"));
const onClickMockNext = fn(() => logInfo(COMPONENT_NAME, "onClick handler"));
const onClickMockFinish = fn(() => logInfo(COMPONENT_NAME, "onClick handler"));

export const Primary: Story = {
  args: {
    activeStep: 1,
    finishContent: "All Steps are completed",
    onBackClick: onClickMockBack,
    onNextClick: onClickMockNext,
    onFinishClick: onClickMockFinish,
    stepsList: [
      { label: "STEP1", content: "CONTENT PAGE 1" },
      { label: "STEP2", content: "CONTENT PAGE 2" },
      { label: "STEP3", content: <Progress type="linear" /> },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonBack = canvas.getByTestId(`${DATA_CY_DEFAULT}-back`);
    const buttonNext = canvas.getByTestId(`${DATA_CY_DEFAULT}-next`);
    if (!buttonBack) {
      return;
    }

    fireEvent.click(buttonBack);
    await expect(onClickMockBack).toHaveBeenCalledTimes(onClickMockBack.mock.calls.length);
    fireEvent.click(buttonNext);
    fireEvent.click(buttonNext);
    await expect(onClickMockNext).toHaveBeenCalledTimes(onClickMockNext.mock.calls.length);
  },
};

export const ActiveStep: Story = {
  args: {
    ...Primary.args,
    activeStep: 3,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonFinish = canvas.getByTestId(`${DATA_CY_DEFAULT}-finish`);
    fireEvent.click(buttonFinish);
    await expect(onClickMockFinish).toHaveBeenCalledTimes(onClickMockFinish.mock.calls.length);
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    labelBackButton: "locale.back",
    labelNextButton: "locale.next",
    labelFinishButton: "locale.finish",
  },
};
