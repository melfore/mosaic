import React from "react";
import renderer from "react-test-renderer";

import { IAppBar } from "../../types/AppBar";
import { Icons } from "../../types/Icon";
import { getComposedDataCy } from "../../utils";
import { getLocalizedMessageMock, MessageMock } from "../../utils/mocks/LocaleMock";
import { getTestableComponent, IPartialTestOptions, ITestOptions } from "../../utils/tests";

import AppBar, { DATA_CY_DEFAULT, SUBPARTS_MAP } from ".";

const DEFAULT_TEST_OPTIONS: ITestOptions<IAppBar> = {
  dataCy: DATA_CY_DEFAULT,
  domNode: "header",
  localized: true,
  props: {},
};

const getAppBarTestable = (options?: IPartialTestOptions<IAppBar>) =>
  getTestableComponent(AppBar, DEFAULT_TEST_OPTIONS, options);

describe("AppBar test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getAppBarTestable();
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const dataCy = "custom";
    const { element, wrapper } = getAppBarTestable({ dataCy, props: { dataCy } });
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const label = MessageMock.confirm;
    const title = MessageMock.title;
    const { wrapper } = getAppBarTestable({
      dataCy: title,
      props: { localized: true, title, userMenu: [{ label, onClick: jest.fn() }] },
    });

    const titleElementDataCy = getComposedDataCy(title, SUBPARTS_MAP.titleText);
    const titleElement = wrapper.find(`h2[data-cy='${titleElementDataCy}']`);
    expect(titleElement.text()).toEqual(getLocalizedMessageMock(title, "en"));

    const userMenuEntryDataCy = getComposedDataCy(title, SUBPARTS_MAP.userMenuItem, 0);
    const userMenuEntry = wrapper.find(`li[data-cy='${userMenuEntryDataCy}']`);
    expect(userMenuEntry.text()).toEqual(getLocalizedMessageMock(label, "en"));
  });

  it("actions", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getAppBarTestable({ props: { actions: [{ icon: Icons.account, onClick }] } });

    const actionButtonDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.action, 0);
    const actionButton = wrapper.find(`button[data-cy='${actionButtonDataCy}']`);
    actionButton.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);

    const actionButtonIconDataCy = `${actionButtonDataCy}-icon`;
    const actionButtonIcon = actionButton.find(`Icon[dataCy='${actionButtonIconDataCy}']`);
    expect(actionButtonIcon.prop("name")).toEqual(Icons.account);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("custom content", () => {
    const customText = "Custom Content";
    const { element, wrapper } = getAppBarTestable({
      props: { children: <div id="content">{customText}</div> } as any,
    });

    const customContent = wrapper.find("#content");
    expect(customContent.text()).toEqual(customText);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("locale", () => {
    const onItemClick = jest.fn();
    const { wrapper } = getAppBarTestable({
      props: {
        locale: {
          items: [
            { label: "English", value: "en" },
            { label: "Italian", value: "it" },
          ],
          label: "en",
          onItemClick,
        },
      },
    });

    const localeButtonDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.localesMenu);
    const localeButton = wrapper.find(`button[data-cy='${localeButtonDataCy}']`);
    const localeButtonIconDataCy = `${localeButtonDataCy}-icon`;
    const localeButtonIcon = localeButton.find(`Icon[dataCy='${localeButtonIconDataCy}']`);
    expect(localeButtonIcon.prop("name")).toEqual(Icons.language);
    localeButton.simulate("click");

    const localeEntryDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.localesMenuItem, 1);
    const localeEntry = wrapper.find(`li[data-cy='${localeEntryDataCy}']`);
    expect(localeEntry.text()).toEqual("Italian");
    localeEntry.simulate("click");
    expect(onItemClick).toHaveBeenCalledTimes(1);
    expect(onItemClick).toHaveBeenCalledWith("it");
    localeButton.simulate("blur");
  });

  it("menu", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getAppBarTestable({ props: { menu: { icon: Icons.account, onClick } } });

    const menuButtonDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.menu);
    const menuButton = wrapper.find(`button[data-cy='${menuButtonDataCy}']`);
    menuButton.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);

    const menuButtonIconDataCy = `${menuButtonDataCy}-icon`;
    const menuButtonIcon = menuButton.find(`Icon[dataCy='${menuButtonIconDataCy}']`);
    expect(menuButtonIcon.prop("name")).toEqual(Icons.account);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("title", () => {
    const onTitleClick = jest.fn();
    const { element, wrapper } = getAppBarTestable({ props: { onTitleClick, title: "Title" } });

    const titleWrapperDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.titleClickable);
    const titleWrapper = wrapper.find(`div[data-cy='${titleWrapperDataCy}']`);
    titleWrapper.simulate("click");
    expect(onTitleClick).toHaveBeenCalledTimes(1);

    const titleTextDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.titleText);
    const titleElement = wrapper.find(`h2[data-cy='${titleTextDataCy}']`);
    expect(titleElement.text()).toEqual("Title");

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("userMenu", () => {
    const onClick = jest.fn();
    const { wrapper } = getAppBarTestable({
      props: { user: { items: [{ label: "Logout", onClick, value: "logout" }], label: "User" } },
    });

    const userMenuButtonDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.userMenu);
    const userMenuButton = wrapper.find(`button[data-cy='${userMenuButtonDataCy}']`);
    const userMenuButtonIconDataCy = `${userMenuButtonDataCy}-icon`;
    const userMenuButtonIcon = userMenuButton.find(`Icon[dataCy='${userMenuButtonIconDataCy}']`);
    expect(userMenuButtonIcon.prop("name")).toEqual(Icons.account);
    userMenuButton.simulate("click");

    const userMenuEntryDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.userMenuItem, 0);
    const userMenuEntry = wrapper.find(`li[data-cy='${userMenuEntryDataCy}']`);
    expect(userMenuEntry.text()).toEqual("Logout");
    userMenuEntry.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);
    userMenuButton.simulate("blur");

    // TODO#lb: add coverage for setUserMenuAnchor(null) when closing userMenu
    // <MUIMenu
    //   id={`${dataCy}-user-menu`}
    //   anchorEl={userMenuAnchor}
    //   anchorOrigin={MENU_ITEMS_ANCHORING}
    //   keepMounted
    //   transformOrigin={MENU_ITEMS_ANCHORING}
    //   open={!!userMenuAnchor}
    //   onClose={() => setUserMenuAnchor(null)}
    // >
  });

  it("username", () => {
    const onClick = jest.fn();
    const username: string = "mos@ic";
    const { wrapper } = getAppBarTestable({
      props: { user: { items: [{ label: "Logout", onClick, value: "logout" }], label: username } },
    });

    const userMenuButtonDataCy = getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.userMenu);
    const userMenuButton = wrapper.find(`button[data-cy='${userMenuButtonDataCy}']`);
    const userMenuButtonLabel = userMenuButton.find(".MuiButton-label");
    expect(userMenuButtonLabel.text()).toEqual(username);
  });
});
