import React from "react";
import { expect, jest } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { configure, userEvent, within } from "@storybook/testing-library";

import { Icons } from "../../types/Icon";
import { getAllComposedDataCy, getComposedDataCy } from "../../utils";
import { logInfo } from "../../utils/logger";
import { localeDecorator, MessageMock } from "../../utils/mocks/LocaleMock";
import getDocsPage from "../../utils/stories";
import Button from "../Button";

import { DATA_CY_DEFAULT, DATA_CY_SHORTCUT, LOCALIZABLE_PROPS, LocalizedCard, SUBPARTS_MAP } from ".";

configure({ testIdAttribute: "data-cy" });

const COMPONENT_NAME = "Card";
LocalizedCard.displayName = COMPONENT_NAME;

const meta = {
  title: "Surfaces/Card",
  component: LocalizedCard,
  decorators: [localeDecorator],
  parameters: {
    docs: {
      ...getDocsPage({
        basedOn: {
          label: "MUI Card Component",
          url: "https://mui.com/components/cards/",
        },
        component: COMPONENT_NAME,
        e2eTestInfo: {
          dataCyDefault: DATA_CY_DEFAULT,
          dataCyShortcut: DATA_CY_SHORTCUT,
          subpartsSuffixes: getAllComposedDataCy(SUBPARTS_MAP),
        },
        localizableProps: LOCALIZABLE_PROPS,
      }),
    },
  },
} satisfies Meta<typeof LocalizedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "A mosaic is an artistic picture or design made out of any materials assembled together.",
    subtitle: "UK: /mə(ʊ)ˈzeɪɪk/",
    title: "Mosaic",
  },
};

export const Actions: Story = {
  args: {
    ...Primary.args,
    actions: [<Button key="gallery" icon={{ name: Icons.open_new }} label="Gallery" onClick={() => {}} />],
  },
};

const onClickMock = jest.fn(() => logInfo(COMPONENT_NAME, "onCollapse handler"));

export const Collapsible: Story = {
  args: {
    ...Primary.args,
    collapsible: "Discover mosaics from all around the globe!",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const collapseButton = canvas.getByTestId(getComposedDataCy(DATA_CY_DEFAULT, SUBPARTS_MAP.collapse));
    if (!collapseButton) {
      return;
    }

    await userEvent.click(collapseButton);
    await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);

    await userEvent.click(collapseButton);
    await expect(onClickMock).toHaveBeenCalledTimes(onClickMock.mock.calls.length);
  },
};

export const CollapsibleActions: Story = {
  args: {
    ...Actions.args,
    ...Collapsible.args,
  },
};

export const Icon: Story = {
  args: {
    ...Primary.args,
    icon: Icons.apps,
  },
};

export const Loading: Story = {
  args: {
    ...Icon.args,
    loading: true,
  },
};

export const Localized: Story = {
  args: {
    ...Primary.args,
    localized: true,
    title: MessageMock.title,
    subtitle: MessageMock.subtitle,
  },
};
