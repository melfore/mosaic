import React from "react";
import MUIStyleIcon from "@material-ui/icons/Style";
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
    locale={{
      items: [
        { label: "English", value: "en" },
        { label: "Italian", value: "it" },
      ],
      label: "en",
      onItemClick: action("On Locale Change"),
    }}
    localized={boolean("localized", false)}
    menu={{ icon: Icons.home, onClick: action("On Menu Click") }}
    onTitleClick={action("On Title Click")}
    title={text("title", "AppBar Title")}
    user={{
      items: [{ label: "Logout", onClick: action("On Logout"), value: "logout" }],
      label: text("username", "mosaic"),
    }}
  />
);

export const CustomIconsAndStyle = () => (
  <AppBar
    actions={[
      { icon: <MUIStyleIcon />, onClick: () => {} },
      { icon: Icons.notifications, onClick: () => {}, style: { backgroundColor: "lightslategray" } },
    ]}
    dataCy="custom-icons-and-style"
    style={{ border: "2px solid #3f51b5", borderRadius: "4px", backgroundColor: "#6495ed" }}
    title="AppBar"
    user={{
      items: [{ label: "Logout", onClick: action("On Logout"), value: "logout" }],
    }}
  />
);

export const Locale = () => (
  <AppBar
    dataCy="locale"
    locale={{
      items: [
        { label: "English", value: "en" },
        { label: "Italian", value: "it" },
      ],
      label: "en",
      onItemClick: action("On Locale Change"),
    }}
    title="AppBar"
  />
);

// TODO: review for localized hoc
export const Localized = () => (
  // IntlProviderMock simulates external IntlProvider context
  <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
    <AppBar localized title={MessageMock.title} userMenu={[{ label: MessageMock.button, onClick: action("Button") }]} />
  </IntlProviderMock>
);

export const Username = () => (
  <AppBar
    dataCy="username"
    title="Mosaic"
    user={{
      items: [
        { label: "View Details", onClick: action("View Details"), value: "details" },
        { label: "Logout", onClick: action("On Logout"), value: "logout" },
      ],
      label: "mosaic@github.com",
    }}
  />
);
