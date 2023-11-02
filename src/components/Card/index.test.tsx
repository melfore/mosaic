import React from "react";
import renderer from "react-test-renderer";

import { ICard } from "../../types/Card";
import { Icons } from "../../types/Icon";
import { getComposedDataCy } from "../../utils";
import { getLocalizedMessageMock, MessageMock } from "../../utils/mocks/LocaleMock";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";
import IconButton from "../IconButton";
import Typography from "../Typography";

import Card, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<ICard> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "div",
  localized: true,
  props: { title: "Card" },
};

const getCardTestable = (options?: IPartialTestOptions<ICard>) =>
  getTestableComponent(Card, DEFAULT_TEST_OPTIONS, options);

describe("Card test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getCardTestable();
    expect(wrapper).toHaveLength(1);

    const titleDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.title);
    const title = wrapper.find(`h2[data-cy='${titleDataCy}']`);
    expect(title.text()).toEqual(DEFAULT_TEST_OPTIONS.props.title);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getCardTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const title = MessageMock.title;
    const { element, wrapper } = getCardTestable({ dataCy: title, props: { localized: true, title } });

    const titleDataCy = getComposedDataCy(title, SUBPARTS_MAP.title);
    const titleWrapper = wrapper.find(`h2[data-cy='${titleDataCy}']`);
    expect(titleWrapper.text()).toEqual(getLocalizedMessageMock(title, "en"));

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("actions", () => {
    const { element, wrapper } = getCardTestable({
      props: {
        actions: [
          <IconButton key="first-action" dataCy="first-action" icon={Icons.account} onClick={() => {}} />,
          <IconButton key="second-action" dataCy="second-action" icon={Icons.account} onClick={() => {}} />,
        ],
      },
    });

    const firstActionButton = wrapper.find("button[data-cy='first-action']");
    expect(firstActionButton).toHaveLength(1);
    const secondActionButton = wrapper.find("button[data-cy='second-action']");
    expect(secondActionButton).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("collapsible", () => {
    const { element, wrapper } = getCardTestable({
      props: {
        collapsible: <Typography dataCy="collapsible-typography">Collapsible</Typography>,
        unmountCollapsible: true,
      },
    });

    const collapseDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.collapse);
    const collapseButton = wrapper.find(`button[data-cy='${collapseDataCy}']`);
    collapseButton.simulate("click");

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon", () => {
    const { element, wrapper } = getCardTestable({ props: { icon: Icons.account } });

    const avatarDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.avatar);
    const icon = wrapper.find(`Icon[dataCy='${avatarDataCy}-icon']`);
    expect(icon.prop("name")).toEqual(Icons.account);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const { element, wrapper } = getCardTestable({ props: { loading: true } });
    const placeholder = wrapper.find("span.MuiSkeleton-root");
    expect(placeholder).toHaveLength(3);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("subtitle", () => {
    const subtitle = "Subtitle";
    const { element, wrapper } = getCardTestable({ props: { subtitle } });

    const subtitleDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.subtitle);
    const subtitleWrapper = wrapper.find(`span[data-cy='${subtitleDataCy}']`);
    expect(subtitleWrapper.text()).toEqual(subtitle);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
