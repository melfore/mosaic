import React from "react";
import renderer from "react-test-renderer";

import { ICard } from "../../types/Card";
import { getLocalizedTestable } from "../../utils/tests";

import Card, { DATA_CY_DEFAULT } from ".";
import { Icons } from "../../types/Icon";
import { MessageMock, mockedMessages, LocaleMock } from "../../utils/mocks/IntlProviderMock";
import IconButton from "../IconButton";
import Typography from "../Typography";

const defaultProps: ICard = {
  title: "Card",
};

const getCardTestable = (props?: ICard, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(Card, { dataCy, domNode: "div", props: { ...defaultProps, ...props } });

describe("Card test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getCardTestable();
    expect(wrapper).toHaveLength(1);
    const title = wrapper.find(`h2[data-cy='${DATA_CY_DEFAULT}-title']`);
    expect(title.text()).toEqual(defaultProps.title);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getCardTestable({ ...defaultProps, dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const title = MessageMock.title;
    const props = { ...defaultProps, localized: true, title };
    const { element, wrapper } = getCardTestable({ ...props }, title);
    const titleWrapper = wrapper.find(`h2[data-cy='${title}-title']`);
    expect(titleWrapper.text()).toEqual(mockedMessages[LocaleMock.en][title]);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("actions", () => {
    const { element, wrapper } = getCardTestable({
      ...defaultProps,
      actions: [
        <IconButton dataCy="first-action" icon={Icons.account} onClick={() => {}} />,
        <IconButton dataCy="second-action" icon={Icons.account} onClick={() => {}} />,
      ],
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
      ...defaultProps,
      collapsible: <Typography dataCy="collapsible-typography">Collapsible</Typography>,
      unmountCollapsible: true,
    });
    const collapseButton = wrapper.find(`button[data-cy='${DATA_CY_DEFAULT}-collapse']`);
    collapseButton.simulate("click");

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("icon", () => {
    const { element, wrapper } = getCardTestable({ ...defaultProps, icon: Icons.account });
    const icon = wrapper.find(`Icon[dataCy='${DATA_CY_DEFAULT}-avatar-icon']`);
    expect(icon.prop("name")).toEqual(Icons.account);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("loading", () => {
    const { element, wrapper } = getCardTestable({ ...defaultProps, loading: true });
    const placeholder = wrapper.find("span.MuiSkeleton-root");
    expect(placeholder).toHaveLength(3);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("subtitle", () => {
    const subtitle = "Subtitle";
    const { element, wrapper } = getCardTestable({ ...defaultProps, subtitle });
    const subtitleWrapper = wrapper.find(`span[data-cy='${DATA_CY_DEFAULT}-subtitle']`);
    expect(subtitleWrapper.text()).toEqual(subtitle);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });
});
