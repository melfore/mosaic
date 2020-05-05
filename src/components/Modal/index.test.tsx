import React from "react";
import { mount } from "enzyme";
import Modal, { ModalIntl } from ".";
import { ButtonVariants } from "../../types/Button";
import IntlProviderMock, { LocaleMock, MessageMock, mockedMessages } from "../../utils/mocks/IntlProviderMock";
import { ModalType } from "../../types/Modal";
import ModalMock from "../../utils/mocks/ModalMock";

const defaultProps = {
  children: <span>Modal Content</span>,
  label: "Modal Title",
  open: true,
};

const componentWrapper = ({ onClose, open, ...props }: ModalType) => (
  <ModalMock initialOpen={open} onClose={onClose}>
    <Modal {...defaultProps} {...props} />
  </ModalMock>
);

const intlComponentWrapper = (props: any, locale?: LocaleMock) => (
  <IntlProviderMock locale={locale}>
    <ModalIntl {...props} />
  </IntlProviderMock>
);

describe("Modal test suite:", () => {
  it("default", () => {
    const component = componentWrapper({ onClose: () => {}, open: true });
    const wrapper = mount(component);
    const modalTitle = wrapper.find("div.MuiDialogTitle-root");
    const title = modalTitle.find("h2");
    expect(title.text()).toEqual("Modal Title");
    const content = wrapper.find("div.MuiDialogContent-root").childAt(0);
    expect(content.matchesElement(defaultProps.children)).toBeTruthy();
  });

  it("with actions", () => {
    const onCancelHandler = jest.fn();
    const onCloseHandler = jest.fn();
    const onConfirmHandler = jest.fn();
    const component = componentWrapper({
      cancel: { action: onCancelHandler, label: "Close", variant: ButtonVariants.outlined },
      confirm: { action: onConfirmHandler, disabled: false, label: "Confirm" },
      onClose: onCloseHandler,
      open: true,
    });
    const wrapper = mount(component);
    const modalActions = wrapper.find("div.MuiDialogActions-root");
    const cancelButton = modalActions.find("button").at(0);
    cancelButton.simulate("click");
    expect(onCancelHandler).toHaveBeenCalledTimes(1);
    expect(onCloseHandler).toHaveBeenCalledTimes(1);
    const confirmButton = modalActions.find("button").at(1);
    confirmButton.simulate("click");
    expect(onConfirmHandler).toHaveBeenCalledTimes(1);
    expect(onCloseHandler).toHaveBeenCalledTimes(2);
  });

  it("with closable", () => {
    const onCloseHandler = jest.fn();
    const component = componentWrapper({ closable: true, onClose: onCloseHandler, open: true });
    const wrapper = mount(component);
    const modalTitle = wrapper.find("div.MuiDialogTitle-root");
    const iconButton = modalTitle.find("IconButton");
    expect(iconButton.prop("icon")).toEqual("close");
    iconButton.simulate("click");
    expect(onCloseHandler).toHaveBeenCalledTimes(1);
  });

  it("with intl", () => {
    const wrapper = mount(
      intlComponentWrapper({
        cancel: { labelId: MessageMock.modalCancel, variant: ButtonVariants.outlined },
        confirm: { labelId: MessageMock.modalConfirm },
        labelId: MessageMock.modalTitle,
        open: true,
      })
    );
    const modalTitle = wrapper.find("div.MuiDialogTitle-root");
    const title = modalTitle.find("h2");
    expect(title.text()).toEqual(mockedMessages[LocaleMock.en][MessageMock.modalTitle]);
    const modalActions = wrapper.find("div.MuiDialogActions-root");
    const cancelButton = modalActions.find("button").at(0);
    const cancelButtonLabel = cancelButton.find("span.MuiButton-label");
    expect(cancelButtonLabel.html()).toContain(mockedMessages[LocaleMock.en][MessageMock.modalCancel]);
    const confirmButton = modalActions.find("button").at(1);
    const confirmButtonLabel = confirmButton.find("span.MuiButton-label");
    expect(confirmButtonLabel.html()).toContain(mockedMessages[LocaleMock.en][MessageMock.modalConfirm]);
  });
});
