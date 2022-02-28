import renderer from "react-test-renderer";

import { ITypography, TypographyDisplay, TypographyVariants } from "../../types/Typography";
import { getLocalizedMessageMock, MessageMock } from "../../utils/mocks/LocaleMock";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import Typography, { DATA_CY_DEFAULT } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<ITypography> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "p",
  localized: true,
  props: { content: "Text" },
};

const getTypographyTestable = (options?: IPartialTestOptions<ITypography>) =>
  getTestableComponent(Typography, DEFAULT_TEST_OPTIONS, options);

describe("Typography test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getTypographyTestable();
    expect(wrapper).toHaveLength(1);

    expect(wrapper.hasClass("MuiTypography-body1"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getTypographyTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const { element, wrapper } = getTypographyTestable({
      props: {
        content: MessageMock.typography,
        localized: true,
      },
    });

    expect(wrapper.text()).toEqual(getLocalizedMessageMock(MessageMock.typography, "en"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("bottomSpacing", () => {
    const { element, wrapper } = getTypographyTestable({ props: { bottomSpacing: true } });
    expect(wrapper.hasClass("MuiTypography-gutterBottom"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("display", () => {
    const { element, wrapper } = getTypographyTestable({ props: { display: TypographyDisplay.inline } });
    expect(wrapper.hasClass("MuiTypography-displayInline"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const loadingDataCy = `${DATA_CY_DEFAULT}-loading`;
    const { element, wrapper } = getTypographyTestable({ dataCy: loadingDataCy, props: { loading: true } });

    const placeholder = wrapper.find("span.MuiSkeleton-root");
    expect(placeholder).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("truncated", () => {
    const { element, wrapper } = getTypographyTestable({ props: { truncated: true } });
    expect(wrapper.hasClass("MuiTypography-noWrap"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("variant", () => {
    const { element, wrapper } = getTypographyTestable({ domNode: "h2", props: { variant: TypographyVariants.title } });
    expect(wrapper.hasClass("MuiTypography-h6"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
