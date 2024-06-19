/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { cloneElement, FC, PropsWithChildren, ReactElement, useCallback, useEffect, useMemo } from "react";
import { Decorator } from "@storybook/react";

export interface StepperMockProps {
  stepList?: [];
  activeStep?: number;
}

const StepperMock: FC<PropsWithChildren<StepperMockProps>> = ({
  children,
  stepList,
  activeStep: externalActiveStep,
}) => {
  const [activeStep, setActiveStep] = React.useState(externalActiveStep || 0);

  useEffect(() => {
    if (externalActiveStep && stepList) {
      if (externalActiveStep > stepList?.length - 1 || externalActiveStep < 0) {
        setActiveStep(0);
      }
    } else {
      setActiveStep(externalActiveStep || 0);
    }
  }, [externalActiveStep, stepList]);

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const wrappedStepper = useMemo(
    () =>
      cloneElement(children as ReactElement<any>, {
        onBackClick: handleBack,
        onNextClick: handleNext,
        activeStep,
      }),
    [children, handleBack, handleNext, activeStep]
  );

  return <div>{wrappedStepper}</div>;
};

const StepperDecorator: Decorator<StepperMockProps> = (Story, { args }) => (
  <StepperMock activeStep={args.activeStep} stepList={args.stepList}>
    {Story()}
  </StepperMock>
);

export default StepperDecorator;
