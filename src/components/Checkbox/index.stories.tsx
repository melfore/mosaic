import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { DOCS_PAGE_STRUCTURE, StoriesWrapper } from "../../utils/stories";
import Checkbox from ".";
import { CheckboxSize } from "../../types/Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    ...DOCS_PAGE_STRUCTURE,
  },
};

export const Canvas = () => (
  <Checkbox
    dataCy={text("data-cy", "checkbox-identifier")}
    value={boolean("value", false)}
    onChange={action("Change checkbox")}
  />
);

export const Values = () => (
  <StoriesWrapper>
    <Checkbox dataCy={"checkbox-identifier"} value={false} onChange={() => {}} />
    <Checkbox dataCy={"checkbox-identifier"} value={true} onChange={() => {}} />
    <Checkbox dataCy={"checkbox-identifier"} value={false} intermediate onChange={() => {}} />
    <Checkbox dataCy={"checkbox-identifier"} value={true} intermediate onChange={() => {}} />
  </StoriesWrapper>
);

export const Disabled = () => (
  <StoriesWrapper>
    <Checkbox dataCy={"checkbox-identifier"} value={false} disabled />
    <Checkbox dataCy={"checkbox-identifier"} value={true} disabled />
    <Checkbox dataCy={"checkbox-identifier"} intermediate disabled />
  </StoriesWrapper>
);

export const Size = () => (
  <StoriesWrapper>
    <Checkbox dataCy={"checkbox-identifier"} value={true} />
    <Checkbox dataCy={"checkbox-identifier"} value={true} size={CheckboxSize.small} />
    <Checkbox dataCy={"checkbox-identifier"} value={false} />
    <Checkbox dataCy={"checkbox-identifier"} value={false} size={CheckboxSize.small} />
  </StoriesWrapper>
);
