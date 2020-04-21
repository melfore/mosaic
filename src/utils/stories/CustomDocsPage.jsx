import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { Description, Primary, Props, Stories, Subtitle, Title } from "@storybook/addon-docs/blocks";
import { CustomDocsBlock, CustomDocsTitle } from "./CustomDocsBlocks";
import { DEFAULT_BLOCKS, DOCS_PAGE_STYLE, INVALID_COMPONENT_BLOCKS_ERROR, MISSING_COMPONENT_NAME_ERROR } from "./utils";

export default class CustomDocsPage extends PureComponent {
  static propTypes = {
    blocks: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.oneOf[("usage", "intl", "notes", "canvas")],
        PropTypes.shape({
          body: PropTypes.element.isRequired,
          title: PropTypes.string.isRequired,
        }),
      ])
    ),
    name: PropTypes.string.isRequired,
  };

  static defaultProps = {
    blocks: ["usage", "intl", "canvas"],
  };

  constructor(props) {
    super(props);
    const { blocks, name } = props;
    if (!name) {
      throw new Error(MISSING_COMPONENT_NAME_ERROR);
    }

    if (!blocks) {
      throw new Error(INVALID_COMPONENT_BLOCKS_ERROR);
    }
  }

  render() {
    const { blocks, name } = this.props;
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
        {blocks.map((block) => (
          <CustomDocsBlock {...defaultBlocks[block]} />
        ))}
        <Primary />
        <Stories />
        <CustomDocsTitle title="Props" />
        <Props />
      </Fragment>
    );
  }
}
