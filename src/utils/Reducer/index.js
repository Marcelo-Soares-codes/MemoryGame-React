import React, { useContext, useReducer } from 'react';
import { RandomData, allData } from '../../Data/cardData';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'Easy':
      return RandomData(allData.Easy);
    case 'Medium':
      return RandomData(allData.Medium);
    case 'Hard':
      return RandomData(allData.Hard);

    default:
      return state;
  }
};
