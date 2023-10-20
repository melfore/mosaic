import { IBase, ILocalizable } from "./Base";

export type StepperType = IBase &
  ILocalizable & {
    stepList: {
      label: string;
      content?: React.ReactNode;
    }[];
    labelBackButton?: string;
    labelNextButton?: string;
    labelFinishButton?: string;
    activeStep: number;
    onNextClick: () => void;
    onBackClick: () => void;
    onFinishClick: () => void;
    finishContent: React.ReactNode;
  };
