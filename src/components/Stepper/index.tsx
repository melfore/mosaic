import React, { FC } from "react";
import { Grid } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import MUIStepper from "@mui/material/Stepper";

import { StepperType } from "../../types/Stepper";
import Button from "../Button";

export const DATA_CY_DEFAULT = "Stepper";

const Stepper: FC<StepperType> = ({
  dataCy = DATA_CY_DEFAULT,
  stepList,
  labelBackButton = "BACK",
  labelNextButton = "NEXT",
  labelFinishButton = "FINISH",
  activeStep,
  onNextClick,
  onBackClick,
  onFinishClick,
  finishContent,
}) => {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <MUIStepper data-cy={dataCy} activeStep={activeStep} alternativeLabel>
          {stepList.map((i, index) => (
            <Step key={index}>
              <StepLabel>{i.label}</StepLabel>
            </Step>
          ))}
        </MUIStepper>
      </Grid>
      {activeStep === stepList.length ? (
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid item xs={12}>
            {finishContent}
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button variant="outlined" label={labelFinishButton} color="primary" onClick={onFinishClick} />
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid item xs={12}>
            {stepList[activeStep].content && stepList[activeStep].content}
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                label={labelBackButton}
                color="primary"
                disabled={activeStep === 0}
                onClick={onBackClick}
                style={{ marginRight: 1 }}
              />
              <Button variant="outlined" label={labelNextButton} color="primary" onClick={onNextClick} />
            </div>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Stepper;
