import { Component } from 'react';
import { MenuCards } from './index';

export default {
  component: MenuCards,
  args: {
    allCards: [
      { id: 1, img: 'react.png', equal: false },
      { id: 2, img: 'react.png', equal: false },
      { id: 3, img: 'nest.png', equal: false },
      { id: 4, img: 'nest.png', equal: false },
    ],
  },
};

export const Template = (args) => {
  console.log(args);
  return (
    <div>
      <MenuCards {...args} />
    </div>
  );
};
