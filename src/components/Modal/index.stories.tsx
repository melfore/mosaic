import React from "react";
import { action } from "@storybook/addon-actions";
import { text, object, boolean, select } from "@storybook/addon-knobs";
import { ButtonVariants } from "../../types/Button";
import ModalMock from "../../utils/mocks/ModalMock";
import { DOCS_PAGE_STRUCTURE, StoriesWrapper } from "../../utils/stories";
import Modal, { ModalIntl } from ".";
import IntlProviderMock, { LocaleMock, MessageMock } from "../../utils/mocks/IntlProviderMock";

export default {
  title: "Modal",
  component: Modal,
  parameters: {
    ...DOCS_PAGE_STRUCTURE,
  },
};

export const Canvas = () => (
  <ModalMock initialOpen={boolean("open", false)} onClose={action("Close action")}>
    <Modal
      cancel={object("cancel", {
        action: action("Optional cancel action"),
        label: "Close",
        variant: ButtonVariants.outlined,
      })}
      closable={boolean("closable", false)}
      confirm={object("confirm", {
        action: action("Optional confirm action"),
        disabled: false,
        label: "Confirm",
      })}
      label={text("label", "Modal Title")}
      onClose={action("Optional close action")}
      open={boolean("open", false)}
    />
  </ModalMock>
);

export const Closable = () => (
  <StoriesWrapper>
    <ModalMock buttonLabel="Closable">
      <Modal closable label="Closable Modal">
        <span>Useful to give another way of dismissal to final user without having actions in modal footer.</span>
      </Modal>
    </ModalMock>
  </StoriesWrapper>
);

export const ModalActions = () => (
  <StoriesWrapper>
    <ModalMock buttonLabel="Default">
      <Modal
        cancel={{ action: () => {}, label: "Cancel", variant: ButtonVariants.outlined }}
        confirm={{ action: () => {}, label: "Confirm" }}
        label="Default Modal"
        onClose={() => {}}
      />
    </ModalMock>
    <ModalMock buttonLabel="Cancel Only">
      <Modal
        cancel={{ action: () => {}, label: "Cancel", variant: ButtonVariants.outlined }}
        label="Cancel Only Modal"
        onClose={() => {}}
      >
        <span>Useful with text only information, for instance explaining why an action can't be done.</span>
      </Modal>
    </ModalMock>
    <ModalMock buttonLabel="Confirm Only">
      <Modal confirm={{ action: () => {}, label: "Confirm" }} label="Confirm Only Modal" onClose={() => {}}>
        <span>Useful when there is no need of having an explicit cancel action.</span>
      </Modal>
    </ModalMock>
    <ModalMock buttonLabel="Confirm Disabled">
      <Modal
        confirm={{ action: () => {}, disabled: true, label: "Confirm" }}
        label="Confirm Disabled Modal"
        onClose={() => {}}
      >
        <span>
          Useful when Confirm action require some input from user, for instance checking out an order. Disable value can
          be controlled from external state to change when user fills required data.
        </span>
      </Modal>
    </ModalMock>
  </StoriesWrapper>
);

export const ScrollableContent = () => (
  <StoriesWrapper>
    <ModalMock buttonLabel="Scrollable Content">
      <Modal closable label="Scrollable Modal">
        <img
          alt="Mosaic"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Roof_hafez_tomb.jpg/440px-Roof_hafez_tomb.jpg"
        />
        <p>
          A mosaic is an artistic picture or design made out of any materials assembled together. Mosaic are used as
          decoration. Architects use mosaic murals for kitchen backsplash, shower wall and entry floor art. Mosaic Craft
          items are used as home decor. Cities often decorate public places such as parks with mosaic murals and
          sculptures.
        </p>
        <p>
          Traditional mosaics are made of small, flat, roughly square pieces of stone or glass of different colors,
          known as tesserae. Some floor mosaics are made of small rounded pieces of stone and called pebble mosaics.
          Mosaic skinning (covering objects with mosaic glass) is done with thin enameled glass and opaque stained
          glass. Modern mosaic art is made from any material in any size ranging from carved stone, bottle caps, and
          found objects.
        </p>
        <p>
          Mosaics have a long history, starting in Mesopotamia in the 3rd millennium BC. Pebble mosaics were made in
          Tiryns in Mycenean Greece; mosaics with patterns and pictures became widespread in classical times, both in
          Ancient Greece and Ancient Rome. Early Christian basilicas from the 4th century onwards were decorated with
          wall and ceiling mosaics. Mosaic art flourished in the Byzantine Empire from the 6th to the 15th centuries;
          that tradition was adopted by the Norman Kingdom of Sicily in the 12th century, by the eastern-influenced
          Republic of Venice, and among the Rus in Ukraine. Mosaic fell out of fashion in the Renaissance, though
          artists like Raphael continued to practise the old technique. Roman and Byzantine influence led Jewish artists
          to decorate 5th and 6th century synagogues in the Middle East with floor mosaics. Mosaic was widely used on
          religious buildings and palaces in early Islamic art, including Islam's first great religious building, the
          Dome of the Rock in Jerusalem, and the Umayyad Mosque in Damascus. Mosaic went out of fashion in the Islamic
          world after the 8th century.
        </p>
        <p>
          Modern mosaics are made by artists and crafters around the world. Many materials other than traditional stone,
          ceramic tesserae, enameled and stained glass may be employed, including shells, beads, charms, chains, gears,
          coins, and pieces of costume jewelry.
        </p>
      </Modal>
    </ModalMock>
  </StoriesWrapper>
);

export const WithIntl = () => (
  <StoriesWrapper>
    <IntlProviderMock locale={select("locale", LocaleMock, LocaleMock.en)}>
      <ModalMock buttonLabel="With Intl">
        <ModalIntl
          cancel={{ labelId: MessageMock.modal_cancel, variant: ButtonVariants.outlined }}
          confirm={{ labelId: MessageMock.modal_confirm }}
          labelId={MessageMock.modal_title}
        >
          <span>Useful to give another way of dismissal to final user without having actions in modal footer.</span>
        </ModalIntl>
      </ModalMock>
    </IntlProviderMock>
  </StoriesWrapper>
);
