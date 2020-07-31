import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { Primary, Props, Stories, Title } from "@storybook/addon-docs/blocks";
import DocumentationTitle from "./DocumentationTitle";
import { DOCS_PAGE_STYLE } from ".";

const DOCUMENTATION_BODY_CLASS = "mosaic-documentation-body";
const DOCUMENTATION_CODE_LINE_CLASS = "mosaic-documentation-code-line";
const DOCUMENTATION_CODE_BLOCK_CLASS = "mosaic-documentation-code-block";

export default class DocumentationPage extends PureComponent {
  static propTypes = {
    basedOn: PropTypes.string,
    component: PropTypes.string.isRequired,
    e2eTestInfo: PropTypes.shape({
      dataCyDefault: PropTypes.string.isRequired,
      dataCyShortcut: PropTypes.string,
    }),
    localizableProps: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ),
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
              <code className={DOCUMENTATION_CODE_LINE_CLASS}>{basedOn}</code>
            </a>
          </p>
        )}
        <DocumentationTitle text="Canvas" subtitle />
        <Primary />
        <DocumentationTitle text="Usage" />
        <p>
          Import <code className={DOCUMENTATION_CODE_LINE_CLASS}>{component}</code> component adding this line to your
          code:
        </p>
        <p>
          <code className={DOCUMENTATION_CODE_BLOCK_CLASS}>{`import { ${component} } from "@melfore/mosaic";`}</code>
        </p>
        <p>
          In the <b>Canvas</b> above you have a working example of the component. Discover all its props by clicking the{" "}
          <b>Show code</b> button.
        </p>
        <p>
          If you want to see ready-to-use examples, scroll down to the <b>Stories</b> paragraph.
        </p>
        {localizableProps && (
          <Fragment>
            <DocumentationTitle text="Intl" subtitle />
            <p>
              This component supports localization of its properties, using the{" "}
              <code className={DOCUMENTATION_CODE_LINE_CLASS}>localized</code> boolean property.
              <br />
              When setting <code className={DOCUMENTATION_CODE_LINE_CLASS}>localized = true</code> all the properties at
              the following paths will be localized:
            </p>
            <table style={{ textAlign: "left", width: "100%" }}>
              <thead>
                <tr>
                  <th>Property Path</th>
                  <th>Base Property Type</th>
                  <th>Nested Property Type</th>
                </tr>
              </thead>
              <tbody>
                {localizableProps.map(({ name, type }) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{type}</td>
                    <td>{`${("" + name).includes(".") ? "string" : "-"}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              <u>Important!</u>
              <br />
              If one of the properties above is an array of strings or object, all the values for that path will get
              localized.
            </p>
          </Fragment>
        )}
        {e2eTestInfo && (
          <Fragment>
            <DocumentationTitle text="E2E Testing" subtitle />
            <p>This component can be tested in e2e (our reference is cypress).</p>
            <p>Useful info:</p>
            <ul>
              <li>Default data-cy: {e2eTestInfo.dataCyDefault}</li>
              {localizableProps && <li>Shortcut data-cy: {e2eTestInfo.dataCyShortcut}</li>}
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
