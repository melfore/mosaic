import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { ISpacer, SpacerDirection } from "../../types/Spacer";
import Spacer, { DATA_CY_DEFAULT } from ".";

const defaultProps: ISpacer = {};

const component = (props?: ISpacer) => <Spacer {...defaultProps} {...props} />;

describe("Spacer test suite:", () => {
  it("default", () => {
    const wrapper = mount(component());
    const div = wrapper.find(`div[data-cy='${DATA_CY_DEFAULT}']`);
    expect(div.prop("direction")).toEqual(SpacerDirection.horizontal);
    expect(div.prop("level")).toEqual(1);
  });

  it("dataCy", () => {
    const wrapper = mount(component({ dataCy: "custom" }));
    const div = wrapper.find(`div[data-cy='custom']`);
    expect(div).toBeInstanceOf(ReactWrapper);
    expect(div).toBeTruthy();
  });

  it("direction", () => {
    const wrapper = mount(component({ direction: SpacerDirection.vertical }));
    const div = wrapper.find(`div[data-cy='${DATA_CY_DEFAULT}']`);
    expect(div.prop("direction")).toEqual(SpacerDirection.vertical);
  });

  it("level", () => {
    const wrapper = mount(component({ level: 2 }));
    const div = wrapper.find(`div[data-cy='${DATA_CY_DEFAULT}']`);
    expect(div.prop("level")).toEqual(2);
  });
});
