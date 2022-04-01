import renderer from "react-test-renderer";

import { ISpacer } from "../../types/Spacer";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Spacer, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<ISpacer> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "div",
  props: {},
};

const getSpacerTestable = (options?: IPartialTestOptions<ISpacer>) =>
  getTestableComponent(Spacer, DEFAULT_TEST_OPTIONS, options);

describe("Spacer test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getSpacerTestable();
    expect(wrapper).toHaveLength(1);

    expect("default-props-check").toBeTruthy();

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getSpacerTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("direction", () => {
    const { element } = getSpacerTestable({ props: { direction: "vertical" } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("level", () => {
    const { element } = getSpacerTestable({ props: { level: 2 } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
