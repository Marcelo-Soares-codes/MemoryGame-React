import { Component } from 'react';
import { PopupCompleted } from './index';
import { Home } from '../../pages/Home/index';

export default {
  component: PopupCompleted,
};

export const Template = () => {
  return (
    <div>
      <Home></Home>
      <PopupCompleted></PopupCompleted>
    </div>
  );
};
