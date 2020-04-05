import React, { Fragment } from 'react';
import {
  Description,
  Primary,
  Props,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs/blocks';

export const DOCS_PAGE_STRUCTURE = {
  docs: {
    page: () => (
      <Fragment>
        <style 
          dangerouslySetInnerHTML={{
            __html: `
              .fake-sbdocs-title {
                color: #333333 !important;
                font-family: Arial !important;
                cursor: text;
                margin: 20px 0 8px;
                padding: 0;
                position: relative;
              }
              h2.fake-sbdocs-title {
                border-bottom: 1px solid rgba(0,0,0,.1);
                font-size: 24px;
                padding-bottom: 4px;
              }
              h3.fake-sbdocs-title {
                font-size: 20px;
              }
              .icon-wrapper {
                align-items: center;
                display: flex;
              }
              .icon-wrapper > span {
                color: #333333 !important;
                font-family: Arial !important;
                font-size: 12px;
                margin-left: 4px;
              }
              .stories-wrapper {
                display: flex;
                flex-wrap: wrap;
              }
              .stories-wrapper > * {
                margin: 8px;
              }
            `
          }}
        />
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Stories />
        <h2 className="fake-sbdocs-title" >
          Props
        </h2>
        <Props />
      </Fragment>
    ),
  },
};

export const StoriesWrapper = (props) => (
  <Fragment>
    <div className="stories-wrapper">
      {props.children}
    </div>
  </Fragment>
);