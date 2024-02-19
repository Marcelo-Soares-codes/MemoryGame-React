import React, { useContext } from 'react';

import { RandomData } from '../../../Data/cardData';
import { flipCardsContext } from '../../Context/useFlipCards';

export const ResetCards = () => {
  const { flipCards, setFlipCards } = useContext(flipCardsContext);
  flipCards.map((card) => {
    card = { ...card, equal: false, flip: false };
  });
  console.log(flipCards);
  setFlipCards(RandomData(flipCards));
};
