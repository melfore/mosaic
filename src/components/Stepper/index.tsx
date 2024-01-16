import React, { FC, useMemo } from "react";
import { Grid } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import MUIStepper from "@mui/material/Stepper";

import { StepperType } from "../../types/Stepper";
import localized, { ILocalizableProperty } from "../../utils/hocs/localized";
import Button from "../Button";

export const DATA_CY_DEFAULT = "Stepper";
export const DATA_CY_SHORTCUT = "Stepper";
export const LOCALIZABLE_PROPS: ILocalizableProperty[] = [
  { name: "labelBackButton", type: "string" },
  { name: "labelNextButton", type: "string" },
  { name: "labelFinishButton", type: "string" },
  { name: "stepList.label", type: "any[]" },
];

const Stepper: FC<StepperType> = ({
  dataCy = DATA_CY_DEFAULT,
  stepsList,
  labelBackButton = "Back",
  labelNextButton = "Next",
  labelFinishButton = "Finish",
  activeStep,
  onNextClick,
  onBackClick,
  onFinishClick,
  finishContent,
}) => {
  const buttonBackDataCy = useMemo(() => `${dataCy}-back`, [dataCy]);
  const buttonNextDataCy = useMemo(() => `${dataCy}-next`, [dataCy]);
  const buttonFinishDataCy = useMemo(() => `${dataCy}-finish`, [dataCy]);
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <MUIStepper data-cy={dataCy} activeStep={activeStep} alternativeLabel>
          {stepsList.map((i, index) => (
            <Step key={index}>
              <StepLabel>{i.label}</StepLabel>
            </Step>
          ))}
        </MUIStepper>
      </Grid>
      {activeStep === stepsList.length ? (
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid item xs={12}>
            {finishContent}
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                dataCy={buttonFinishDataCy}
                variant="outlined"
                label={labelFinishButton}
                color="primary"
                onClick={onFinishClick}
              />
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid item xs={12}>
            {stepsList[activeStep].content && stepsList[activeStep].content}
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                dataCy={buttonBackDataCy}
                variant="outlined"
                label={labelBackButton}
                color="primary"
                disabled={activeStep === 0}
                onClick={onBackClick}
                style={{ marginRight: 1 }}
              />
              <Button
                dataCy={buttonNextDataCy}
                variant="outlined"
                label={labelNextButton}
                color="primary"
                onClick={onNextClick}
              />
            </div>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export const localizedStepper = localized(Stepper, {
  dataCyShortcut: DATA_CY_SHORTCUT,
  localizableProps: LOCALIZABLE_PROPS,
});

export default localizedStepper;
