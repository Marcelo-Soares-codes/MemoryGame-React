import { Component } from 'react';
import { Card } from './index';

import { dataMedium } from '../../Mocks/cardMock';

export default {
  component: Card,
  args: dataMedium[0],
};

export const Template = (args) => {
  return (
    <div>
      <Card {...args}></Card>
    </div>
  );
};
