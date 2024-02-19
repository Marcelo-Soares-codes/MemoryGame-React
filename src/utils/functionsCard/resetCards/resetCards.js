import React, { useContext } from 'react';

import { Data } from '../../../Mocks/cardMock';
import { flipCardsContext } from '../../Context/useFlipCards';

export const ResetCards = () => {
  const { flipCards, setFlipCards } = useContext(flipCardsContext);

  setFlipCards(Data());
};
