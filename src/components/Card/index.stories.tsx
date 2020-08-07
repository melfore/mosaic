import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy } from "../../utils";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";
import { getDocumentationPage, StoriesWrapper } from "../../utils/stories";
import Button from "../Button";
import IconButton from "../IconButton";
import Typography from "../Typography";

import Card, { CardWithProps, DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, SUBPARTS_MAP } from ".";

export default {
  title: "Card",
  component: CardWithProps,
  parameters: {
    ...getDocumentationPage({
      basedOn: "@material-ui/core/Card",
      component: "Card",
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
  <Card
    actions={[
      <Button label="Share" onClick={action("Share Button")} />,
      <IconButton icon={Icons.add} onClick={action("Add action")} />,
    ]}
    collapsible={
      <Typography>
        Traditional mosaics are made of small, flat, roughly square pieces of stone or glass of different colors, known
        as tesserae. Some floor mosaics are made of small rounded pieces of stone and called pebble mosaics. Mosaic
        skinning (covering objects with mosaic glass) is done with thin enameled glass and opaque stained glass. Modern
        mosaic art is made from any material in any size ranging from carved stone, bottle caps, and found objects.
      </Typography>
    }
    dataCy={text("dataCy", DATA_CY_DEFAULT)}
    icon={select("icon", Icons, Icons.add)}
    loading={boolean("loading", false)}
    localized={boolean("localized", false)}
    subtitle={text("subTitle", "Mosaic Card Subtitle")}
    title={text("title", "Mosaic Card")}
    unmountCollapsible={boolean("unmountCollapsible", false)}
  >
    <Typography>
      A mosaic is an artistic picture or design made out of any materials assembled together. Mosaic are used as
      decoration. Architects use mosaic murals for kitchen backsplash, shower wall and entry floor art. Mosaic Craft
      items are used as home decor. Cities often decorate public places such as parks with mosaic murals and sculptures.
    </Typography>
  </Card>
);

export const Basic = () => (
  <StoriesWrapper>
    <Card title="Mosaic">
      <Typography>A mosaic is an artistic picture or design made out of any materials assembled together.</Typography>
    </Card>
  </StoriesWrapper>
);

export const Collapsible = () => (
  <StoriesWrapper>
    <Card
      actions={[<Button icon={{ name: Icons.open_new }} label="Discover" onClick={action("Discover")} />]}
      collapsible={<Typography children="Discover our catalog!" />}
      icon={Icons.business}
      subtitle="The best in town for components"
      title="Mosaic Shop"
    >
      <Typography>Opening hours: 9AM - 6PM</Typography>
    </Card>
  </StoriesWrapper>
);

export const Loading = () => (
  <StoriesWrapper>
    <Card icon={Icons.add} loading title="Mosaic">
      <Typography>A mosaic is an artistic picture or design made out of any materials assembled together.</Typography>
    </Card>
  </StoriesWrapper>
);

export const Localized = () => (
  // IntlProviderMock simulates external IntlProvider context
  <StoriesWrapper>
    <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
      <Card icon={Icons.business} localized title={MessageMock.title} subtitle={MessageMock.subtitle} />
    </IntlProviderMock>
  </StoriesWrapper>
);

export const WithAvatar = () => (
  <StoriesWrapper>
    <Card icon={Icons.business} subtitle="The best in town for components" title="Mosaic Shop">
      <Typography>Opening hours: 9AM - 6PM</Typography>
    </Card>
  </StoriesWrapper>
);

export const WithActions = () => (
  <StoriesWrapper>
    <Card
      actions={[<Button icon={{ name: Icons.open_new }} label="Discover" onClick={action("Discover")} />]}
      icon={Icons.business}
      subtitle="The best in town for components"
      title="Mosaic Shop"
    >
      <Typography>Opening hours: 9AM - 6PM</Typography>
    </Card>
  </StoriesWrapper>
);
