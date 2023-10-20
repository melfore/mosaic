import { ILocalizable } from "./Base";

export type StepperType = ILocalizable & {
  stepsList: StepListType[];
  labelBackButton?: string;
  labelNextButton?: string;
  labelFinishButton?: string;
  activeStep: number;
  onNextClick: () => void;
  onBackClick: () => void;
  onFinishClick: () => void;
  finishContent: React.ReactNode;
};

export type StepListType = {
  label: string;
  content?: React.ReactNode;
};
