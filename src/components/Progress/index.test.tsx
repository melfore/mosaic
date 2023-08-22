import renderer from "react-test-renderer";

import { ProgressType } from "../../types/Progress";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Progress, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<ProgressType> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "progress",
  localized: true,
  props: { type: "Circular", color: "primary", withLabel: false },
};

const getProgressTestable = (options?: IPartialTestOptions<ProgressType>) =>
  getTestableComponent(Progress, DEFAULT_TEST_OPTIONS, options);

describe("Progress test suite:", () => {
  it("color", () => {
    const { element } = getProgressTestable({ props: { color: "success" } });

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
