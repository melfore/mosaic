import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { Primary, Props, Stories, Title } from "@storybook/addon-docs/blocks";
import DocumentationTitle from "./DocumentationTitle";
import { DOCS_PAGE_STYLE, DOCUMENTATION_BODY_CLASS, DOCUMENTATION_CODE_BLOCK_CLASS } from "./index";

export default class DocumentationPage extends PureComponent {
  static propTypes = {
    basedOn: PropTypes.string,
    component: PropTypes.string.isRequired,
    e2eTestInfo: PropTypes.shape({
      dataCyDefault: PropTypes.string.isRequired,
      dataCyShortcut: PropTypes.string,
      usesClass: PropTypes.bool,
    }),
    localizableProps: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    basedOn: "",
    localizableProps: null,
    e2eTestInfo: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { basedOn, component, e2eTestInfo, localizableProps } = this.props;
    return (
      <div className={DOCUMENTATION_BODY_CLASS}>
        <style
          dangerouslySetInnerHTML={{
            __html: DOCS_PAGE_STYLE,
          }}
        />
        <Title />
        {basedOn && (
          <p>
            This component is based on:{" "}
            <a href={`https://www.google.com/search?q=${basedOn}`} target="_blank">
              <code>{basedOn}</code>
            </a>
          </p>
        )}
        <DocumentationTitle text="Canvas" subtitle />
        <Primary />
        <DocumentationTitle text="Usage" />
        <p>
          Import <code>{component}</code> component adding this line to your code:
        </p>
        <p>
          <code className={DOCUMENTATION_CODE_BLOCK_CLASS}>{`import { ${component} } from "@melfore/mosaic";`}</code>
        </p>
        <p>
          In the <b>Canvas</b> above you have a working example of the component. Discover all its props by clicking the{" "}
          <b>Show code</b> button.
        </p>
        <p>
          If you want ready-to-use examples, scroll down to the <b>Stories</b> paragraph.
        </p>
        {localizableProps && (
          <Fragment>
            <DocumentationTitle text="Intl" subtitle />
            <p>This component supports localization of its properties. Below all the props that can be localized:</p>
            <ul>
              {localizableProps.map(({ name, type }) => (
                <li>
                  Name: {name} / Type: {type}
                </li>
              ))}
            </ul>
            {/* TODO: add doc */}
          </Fragment>
        )}
        {e2eTestInfo && (
          <Fragment>
            <DocumentationTitle text="E2E Testing" subtitle />
            <p>This component can be tested in e2e (our reference is cypress).</p>
            <p>Useful info:</p>
            <ul>
              <li>Default data-cy: {e2eTestInfo.dataCyDefault}</li>
              <li>Shortcut data-cy: {e2eTestInfo.dataCyShortcut}</li>
              <li>Uses class: {e2eTestInfo.usesClass ? "yes" : "no"}</li>
            </ul>
          </Fragment>
        )}
        <DocumentationTitle text="Props" subtitle />
        <Props />
        <Stories />
      </div>
    );
  }
}
