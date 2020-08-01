import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { ISpacer, SpacerDirection } from "../../types/Spacer";
import Spacer, { DATA_CY_DEFAULT } from ".";

const defaultProps: ISpacer = {};

const getElement = (props?: ISpacer, dataCy = DATA_CY_DEFAULT): ReactWrapper => {
  const wrapper = mount(<Spacer {...defaultProps} {...props} />);
  return wrapper.find("div[data-cy='" + dataCy + "']");
};

describe("Spacer test suite:", () => {
  it("default", () => {
    const element = getElement();
    expect("default-props-check").toBeTruthy();
  });

  it("dataCy", () => {
    const element = getElement({ dataCy: "custom" }, "custom");
    expect(element).toBeInstanceOf(ReactWrapper);
    expect(element).toBeTruthy();
  });

  it("direction", () => {
    const element = getElement({ direction: SpacerDirection.vertical });
    expect(element.prop("direction")).toEqual(SpacerDirection.vertical);
  });

  it("level", () => {
    const element = getElement({ level: 2 });
    expect(element.prop("level")).toEqual(2);
  });
});
