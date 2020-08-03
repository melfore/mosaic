import renderer from "react-test-renderer";

import { ISpacer, SpacerDirection } from "../../types/Spacer";
import { getTestable } from "../../utils/tests";

import Spacer, { DATA_CY_DEFAULT } from ".";

const defaultProps: ISpacer = {};

const getSpacerTestable = (props?: ISpacer, dataCy = DATA_CY_DEFAULT) =>
  getTestable(Spacer, { dataCy, domNode: "div", props: { ...defaultProps, ...props } });

describe("Spacer test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getSpacerTestable();
    expect(wrapper).toHaveLength(1);
    expect("default-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getSpacerTestable({ dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("direction", () => {
    const { element, wrapper } = getSpacerTestable({ direction: SpacerDirection.vertical });
    expect(wrapper.prop("direction")).toEqual(SpacerDirection.vertical);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("level", () => {
    const { element, wrapper } = getSpacerTestable({ level: 2 });
    expect(wrapper.prop("level")).toEqual(2);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
