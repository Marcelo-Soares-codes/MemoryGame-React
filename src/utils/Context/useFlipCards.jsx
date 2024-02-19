import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { RandomData, allData } from '../../Data/cardData';

export const flipCardsContext = createContext();

export const FlipCardsProvider = ({ children }) => {
  const [flipCards, setFlipCards] = useState(RandomData(allData.Medium));

  return (
    <flipCardsContext.Provider value={{ flipCards, setFlipCards }}>
      {children}
    </flipCardsContext.Provider>
  );
};

FlipCardsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
