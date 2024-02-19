import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { Data, dataMedium } from '../../Mocks/cardMock';

export const flipCardsContext = createContext();

export const FlipCardsProvider = ({ children }) => {
  const [flipCards, setFlipCards] = useState(Data(dataMedium));

  return (
    <flipCardsContext.Provider value={{ flipCards, setFlipCards }}>
      {children}
    </flipCardsContext.Provider>
  );
};

FlipCardsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
