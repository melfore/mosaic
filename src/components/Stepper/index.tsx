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
    <Grid container spacing={2} sx={{ width: "100%" }}>
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
        <div style={{ width: "100%" }}>
          <Grid item xs={12}>
            <div id={`${activeStep}`} style={{ width: "100%", padding: 10 }}>
              {finishContent}
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "end", paddingTop: 10 }}>
              <Button variant="outlined" label={labelFinishButton} color="primary" onClick={onFinishClick} />
            </div>
          </Grid>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <Grid item xs={12}>
            <div id={`${activeStep}`} style={{ width: "100%", padding: 10 }}>
              {stepList[activeStep].content && stepList[activeStep].content}
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 10 }}>
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
        </div>
      )}
    </Grid>
  );
};

export default Stepper;
