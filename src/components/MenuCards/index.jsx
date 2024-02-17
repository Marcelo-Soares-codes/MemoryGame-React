import React, { useContext } from 'react'; // Importe useContext corretamente
import PropTypes from 'prop-types';
import { flipCardsContext } from '../../utils/Context/useFlipCards'; // Importe o contexto flipCardsContext

import { Card } from '../Card';

export const MenuCards = () => {
  const { flipCards, setFlipCards } = useContext(flipCardsContext);

  return (
    <section className="flex justify-center h-full">
      <ul className="grid sm:grid-cols-4 grid-cols-3 sm:mx-10 mx-2 my-16 sm:gap-6 gap-3 md:bg-white md:max-w-2xl md:p-12 rounded-2xl">
        {Array.isArray(flipCards) &&
          flipCards.map((card) => (
            <li key={card.id} className="">
              <Card {...card} />
            </li>
          ))}
      </ul>
    </section>
  );
};
