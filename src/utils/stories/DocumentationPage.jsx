import React, { Fragment, PureComponent } from "react";
import { Tooltip } from "@material-ui/core";
import { Primary, Props, Stories, Title } from "@storybook/addon-docs/blocks";
import PropTypes from "prop-types";

import Icon from "../../components/Icon";
import Spacer from "../../components/Spacer";
import { Icons, IconSize } from "../../types/Icon";
import { DATA_CY_SUFFIX_SEPARATOR } from "..";

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
      subpartsSuffixes: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          suffix: PropTypes.string.isRequired,
        })
      ),
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

  render() {
    const { basedOn, component, e2eTestInfo, localizableProps } = this.props;
    return (
      <div className={DOCUMENTATION_BODY_CLASS}>
        <style
          dangerouslySetInnerHTML={{
            __html: DOCS_PAGE_STYLE,
          }}
        />
        <span style={{ alignItems: "center", display: "flex" }}>
          <Title />
          <Spacer level={3} />
          {localizableProps && (
            <Tooltip placement="top" title="Localizable">
              <span>
                <Icon name={Icons.language} size={IconSize.small} />
              </span>
            </Tooltip>
          )}
          <Spacer />
          {e2eTestInfo.dataCyDefault && (
            <Tooltip placement="top" title="Testable">
              <span>
                <Icon name={Icons.search} size={IconSize.small} />
              </span>
            </Tooltip>
          )}
        </span>
        {basedOn && (
          <p>
            This component is based on:{" "}
            <a href={`https://www.google.com/search?q=${basedOn}`} rel="noreferrer" target="_blank">
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
              When setting <code className={DOCUMENTATION_CODE_LINE_CLASS}>localized = true</code> all the localizable
              props will be localized using their value as id for{" "}
              <code className={DOCUMENTATION_CODE_LINE_CLASS}>{`intl.formatMessage({ id: 'property-value'})`}</code>.
            </p>
            <b>Localizable props:</b>
            <ul>
              {localizableProps.map(({ name, type }, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
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
            <p>
              This component provides the specific <code className={DOCUMENTATION_CODE_LINE_CLASS}>data-cy</code> HTML
              attribute for e2e testing (the reference framework is{" "}
              <a href="https://www.cypress.io" rel="noreferrer" target="_blank">
                cypress.io
              </a>
              ).
            </p>
            <p>
              By design <code className={DOCUMENTATION_CODE_LINE_CLASS}>data-cy</code> attribute is not mandatory for
              the final user, but required for e2e testing, so when not explicitely provided it is defaulted to:{" "}
              <code className={DOCUMENTATION_CODE_LINE_CLASS}>{e2eTestInfo.dataCyDefault}</code>{" "}
            </p>
            <p>Example:</p>
            <p>
              <code
                className={DOCUMENTATION_CODE_BLOCK_CLASS}
              >{`// Replace the value of the attribute accordingly, here it's defaulted
              cy.get("[data-cy='${e2eTestInfo.dataCyDefault}']") // Do something with it
              `}</code>
            </p>
            {localizableProps && e2eTestInfo.dataCyShortcut && (
              <p>
                <u>Important!</u>
                <br />
                When in localized mode <code className={DOCUMENTATION_CODE_LINE_CLASS}>data-cy</code> will be defaulted
                with the value of the{" "}
                <code className={DOCUMENTATION_CODE_LINE_CLASS}>{e2eTestInfo.dataCyShortcut}</code> property.
              </p>
            )}
            {e2eTestInfo.subpartsSuffixes && (
              <Fragment>
                <p>
                  <b>Testing component subparts</b>
                </p>
                <p>
                  There are other <code className={DOCUMENTATION_CODE_LINE_CLASS}>data-cy</code> HTML attributes exposed
                  for subparts of this component.
                  <br />
                  The value for those subparts is a concatenation of the{" "}
                  <code className={DOCUMENTATION_CODE_LINE_CLASS}>data-cy</code> property value (either explicit or
                  defaulted) and a suffix.
                </p>
                <p>Here the list of all subparts with their suffixes:</p>
                <table style={{ textAlign: "left", minWidth: "75%" }}>
                  <thead>
                    <tr>
                      <th>Subpart</th>
                      <th>Suffix</th>
                    </tr>
                  </thead>
                  <tbody>
                    {e2eTestInfo.subpartsSuffixes.map(({ label, suffix }) => (
                      <tr key={label}>
                        <td>{label}</td>
                        <td>{`${DATA_CY_SUFFIX_SEPARATOR}${suffix}`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p>Example:</p>
                <p>
                  <code
                    className={DOCUMENTATION_CODE_BLOCK_CLASS}
                  >{`// Getting the '${e2eTestInfo.subpartsSuffixes[0].label}' subpart
                  // Replace the base value of the attribute accordingly, here it's defaulted
                cy.get("[data-cy='${e2eTestInfo.dataCyDefault}-${e2eTestInfo.subpartsSuffixes[0].suffix}']") // Do something with it
                `}</code>
                </p>
              </Fragment>
            )}
          </Fragment>
        )}
        <DocumentationTitle text="Props" subtitle />
        <Props />
        <Stories />
      </div>
    );
  }
}
