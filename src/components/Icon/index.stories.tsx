import React from 'react';
import {  } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { Icons, IconSize } from '../../types/Icon';
import { DOCS_PAGE_STRUCTURE, StoriesWrapper } from '../../utils/storybook';
import Icon from '.';

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    ...DOCS_PAGE_STRUCTURE,
  },
}

export const Canvas = () => (
  <Icon
    dataCy="icon"
    name={select('icon', Icons, Icons.add)}
    size={select('size', IconSize, IconSize.default)}
  />
);

export const Size = () => (
  <StoriesWrapper>
    <Icon
      dataCy="icon-send"
      name={Icons.send}
      size={IconSize.small}
    />
    <Icon
      dataCy="icon-send"
      name={Icons.send}
    />
    <Icon
      dataCy="icon-send"
      name={Icons.send}
      size={IconSize.large}
    />
  </StoriesWrapper>
);

const allIcons = Object.values(Icons);
const getIcon = (icon: string) => allIcons.find(i => i === icon);
const allIconsJsx = allIcons
  .map((icon) => (
    <div className="icon-wrapper">
      <Icon
        dataCy={`icon-${icon}`}
        name={getIcon(icon) || Icons.add}
      />
      <span>
        {icon}
      </span>
    </div>
  ));

export const AllIcons = () => (
  <StoriesWrapper>
    {allIconsJsx}
  </StoriesWrapper>
);
