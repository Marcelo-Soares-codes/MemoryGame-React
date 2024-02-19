import React, { useContext, useReducer } from 'react';
import { Data, dataEasy, dataHard, dataMedium } from '../../Mocks/cardMock';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'Easy':
      return Data(dataEasy);
    case 'Medium':
      return Data(dataMedium);
    case 'Hard':
      return Data(dataHard);

    default:
      return state;
  }
};
