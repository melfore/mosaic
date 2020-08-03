import renderer from "react-test-renderer";
import { IAppBar } from "../../types/AppBar";
import { getLocalizedTestable } from "../../utils/tests";
import AppBar, { DATA_CY_DEFAULT, DATA_CY_SHORTCUT } from ".";
import { MessageMock, mockedMessages, LocaleMock } from "../../utils/mocks/IntlProviderMock";
import { Icons } from "../../types/Icon";

const defaultProps: IAppBar = {};

const getAppBarTestable = (props?: IAppBar, dataCy = DATA_CY_DEFAULT) =>
  getLocalizedTestable(AppBar, { dataCy, domNode: "header", props: { ...defaultProps, ...props } });

describe("AppBar test suite:", () => {
  it("default", () => {
    const { element, wrapper } = getAppBarTestable();
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("dataCy", () => {
    const { element, wrapper } = getAppBarTestable({ dataCy: "custom" }, "custom");
    expect(wrapper).toHaveLength(1);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("localized", () => {
    const label = MessageMock.confirm;
    const title = MessageMock.title;
    const props = { ...defaultProps, localized: true, title, userMenu: [{ label, onClick: jest.fn() }] };
    const { wrapper } = getAppBarTestable({ ...props }, props[DATA_CY_SHORTCUT]);
    const titleElement = wrapper.find(`h2[data-cy='${MessageMock.title}-title']`);
    expect(titleElement.text()).toEqual(mockedMessages[LocaleMock.en][title]);
    const userMenuEntry = wrapper.find(`li[data-cy='${MessageMock.title}-user-menu-0']`);
    expect(userMenuEntry.text()).toEqual(mockedMessages[LocaleMock.en][label]);
  });

  it("actions", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getAppBarTestable({ actions: [{ icon: Icons.account, onClick }] });
    const actionButton = wrapper.find(`button[data-cy='${DATA_CY_DEFAULT}-action-0']`);
    actionButton.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);
    const actionButtonIcon = actionButton.find(`Icon[dataCy='${DATA_CY_DEFAULT}-action-0-icon']`);
    expect(actionButtonIcon.prop("name")).toEqual(Icons.account);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("menu", () => {
    const onClick = jest.fn();
    const { element, wrapper } = getAppBarTestable({ menu: { icon: Icons.account, onClick } });
    const menuButton = wrapper.find(`button[data-cy='${DATA_CY_DEFAULT}-menu']`);
    menuButton.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);
    const menuButtonIcon = menuButton.find(`Icon[dataCy='${DATA_CY_DEFAULT}-menu-icon']`);
    expect(menuButtonIcon.prop("name")).toEqual(Icons.account);

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("title", () => {
    const onTitleClick = jest.fn();
    const { element, wrapper } = getAppBarTestable({ onTitleClick, title: "Title" });
    const titleWrapper = wrapper.find(`div[data-cy='${DATA_CY_DEFAULT}-title-wrapper']`);
    titleWrapper.simulate("click");
    expect(onTitleClick).toHaveBeenCalledTimes(1);
    const titleElement = wrapper.find(`h2[data-cy='${DATA_CY_DEFAULT}-title']`);
    expect(titleElement.text()).toEqual("Title");

    const snapshotWrapper = renderer.create(element).toJSON();
    expect(snapshotWrapper).toMatchSnapshot();
  });

  it("userMenu", () => {
    const onClick = jest.fn();
    const { wrapper } = getAppBarTestable({ userMenu: [{ label: "Logout", onClick }] });
    const userMenuButton = wrapper.find(`button[data-cy='${DATA_CY_DEFAULT}-user-menu']`);
    const userMenuButtonIcon = userMenuButton.find(`Icon[dataCy='${DATA_CY_DEFAULT}-user-menu-icon']`);
    expect(userMenuButtonIcon.prop("name")).toEqual(Icons.account);
    userMenuButton.simulate("click");
    const userMenuEntry = wrapper.find(`li[data-cy='${DATA_CY_DEFAULT}-user-menu-0']`);
    expect(userMenuEntry.text()).toEqual("Logout");
    userMenuEntry.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);
    userMenuButton.simulate("blur");

    // TODO: add coverage for setUserMenuAnchor(null) when closing userMenu
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
});
