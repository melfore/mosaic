import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { Description, Primary, Props, Stories, Subtitle, Title } from "@storybook/addon-docs/blocks";
import { CustomDocsBlock, CustomDocsTitle } from "./CustomDocsBlocks";
import { DEFAULT_BLOCKS, DOCS_PAGE_STYLE, MISSING_COMPONENT_NAME_ERROR } from "./utils";

export default class CustomDocsPage extends PureComponent {
  static propTypes = {
    intlSupport: PropTypes.bool,
    name: PropTypes.string.isRequired,
    notes: PropTypes.shape({
      body: PropTypes.element.isRequired,
      subtitle: PropTypes.bool,
      title: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    intlSupport: true,
    notes: null,
  };

  constructor(props) {
    super(props);
    const { name } = props;
    if (!name) {
      throw new Error(MISSING_COMPONENT_NAME_ERROR);
    }
  }

  render() {
    const { intlSupport, name, notes } = this.props;
    const defaultBlocks = DEFAULT_BLOCKS(name);
    return (
      <Fragment>
        <style
          dangerouslySetInnerHTML={{
            __html: DOCS_PAGE_STYLE,
          }}
        />
        <Title />
        <Subtitle />
        <Description />
        <CustomDocsBlock {...defaultBlocks["usage"]} />
        {intlSupport && <CustomDocsBlock {...defaultBlocks["intl"]} />}
        {!!notes && <CustomDocsBlock {...notes} />}
        <CustomDocsBlock {...defaultBlocks["canvas"]} />
        <Primary />
        <Stories />
        <CustomDocsTitle title="Props" />
        <Props />
      </Fragment>
    );
  }
}
