import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { getDocsPageStructure, StoriesWrapper } from "../../utils/stories";
import Switch from ".";
import { SwitchSize } from "../../types/Switch";

export default {
  title: "Switch",
  component: Switch,
  parameters: {
    ...getDocsPageStructure("Switch", ["usage", "canvas"]),
  },
};

export const Canvas = () => (
  <Switch
    dataCy={text("data-cy", "switch-identifier")}
    value={boolean("value", false)}
    onChange={action("Change switch")}
  />
);

export const Values = () => (
  <StoriesWrapper>
    <Switch dataCy={"switch-identifier"} value={false} onChange={() => {}} />
    <Switch dataCy={"switch-identifier"} value={true} onChange={() => {}} />
  </StoriesWrapper>
);

export const Disabled = () => (
  <StoriesWrapper>
    <Switch dataCy={"switch-identifier"} value={false} disabled />
    <Switch dataCy={"switch-identifier"} value={true} disabled />
  </StoriesWrapper>
);

export const Size = () => (
  <StoriesWrapper>
    <Switch dataCy={"switch-identifier"} value={true} />
    <Switch dataCy={"switch-identifier"} value={true} size={SwitchSize.small} />
    <Switch dataCy={"switch-identifier"} value={false} />
    <Switch dataCy={"switch-identifier"} value={false} size={SwitchSize.small} />
  </StoriesWrapper>
);
