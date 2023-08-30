import renderer from "react-test-renderer";

import { ProgressType } from "../../types/Progress";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Progress, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<ProgressType> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "span",
  localized: true,
  props: {
    type: "Circular",
    withLabel: false,
  },
};

const getProgressTestable = (options?: IPartialTestOptions<ProgressType>) =>
  getTestableComponent(Progress, DEFAULT_TEST_OPTIONS, options);

describe("Progress test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getProgressTestable();
    console.log(wrapper.debug());

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getProgressTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("color", () => {
    const { element } = getProgressTestable({ props: { color: "success" } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("linear", () => {
    const { element } = getProgressTestable({ props: { type: "Linear" } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("with label", () => {
    const { element } = getProgressTestable({ props: { withLabel: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("with label - linear", () => {
    const { element } = getProgressTestable({ props: { type: "Linear", withLabel: true } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
