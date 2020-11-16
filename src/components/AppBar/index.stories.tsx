import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getDocumentationPage } from "../../utils/stories";

import AppBar, { AppBarWithProps, DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

export default {
  title: "AppBar",
  component: AppBarWithProps,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/AppBar",
      component: "AppBar",
      e2eTestInfo: {
        dataCyDefault: DATA_CY_DEFAULT,
        dataCyShortcut: DATA_CY_SHORTCUT,
        subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
      },
      localizableProps: LOCALIZABLE_PROPS,
    }),
  },
};

export const Canvas = () => (
  <AppBar
    actions={[{ icon: Icons.mail, onClick: action("On Mail Click") }]}
    dataCy={text("dataCy", DATA_CY_DEFAULT)}
    localized={boolean("localized", false)}
    menu={{ icon: Icons.home, onClick: action("On Menu Click") }}
    onTitleClick={action("On Title Click")}
    title={text("title", "AppBar Title")}
    userMenu={[{ label: "Logout", onClick: action("On Logout") }]}
    username={text("username", "mosaic")}
  />
);

export const CustomStyle = () => (
  <AppBar
    actions={[
      { icon: Icons.language, onClick: () => {}, style: { backgroundColor: "yellow", color: "black" } },
      { icon: Icons.notifications, onClick: () => {}, style: { backgroundColor: "green", color: "white" } },
    ]}
    style={{ backgroundColor: "red" }}
    title="AppBar"
    userMenu={[{ label: "Logout", onClick: () => {} }]}
  />
);

export const Localized = () => (
  // IntlProviderMock simulates external IntlProvider context
  <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
    <AppBar localized title={MessageMock.title} userMenu={[{ label: MessageMock.button, onClick: action("Button") }]} />
  </IntlProviderMock>
);

export const WithUsername = () => (
  <AppBar
    title="Mosaic"
    userMenu={[
      { label: "View Details", onClick: action("View Details") },
      { label: "Logout", onClick: action("Logout") },
    ]}
    username="mosaic@github.com"
  />
);
