import React, { useContext } from 'react';

import { Data } from '../../../Mocks/cardMock';
import { flipCardsContext } from '../../Context/useFlipCards';
import { PopupCompleted } from '../../../components/PopupCompleted/index';

export const CheckAllCorrect = () => {
  const { flipCards, setFlipCards } = useContext(flipCardsContext);
  let correctCards = 0;

  flipCards.forEach((card) => {
    if (card.equal) {
      correctCards++;
    }
  });
  if (correctCards === flipCards.length) {
    return <PopupCompleted />;
  }
};
