import React, { Children, createContext, useContext, useState } from 'react';

const flipCardsContext = createContext();

const defaultStateFlipCards = {
  flipCard1: false,
  flipCard2: false,
  canFlip: true,
};

export const FlipCardsProvider = ({ children }) => {
  const [flipCards, setFlipCards] = useState({});
  return;
};
