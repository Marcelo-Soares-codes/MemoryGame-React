import PropTypes from 'prop-types';
import { Card } from '../Card';

export const MenuCards = ({ allCards }) => {
  return (
    <section className="flex justify-center h-full">
      <ul className="grid sm:grid-cols-4 grid-cols-3 sm:mx-10 mx-2 my-16 sm:gap-6 gap-3 md:bg-white md:max-w-2xl md:p-12 rounded-2xl">
        {Array.isArray(allCards) &&
          allCards.map((card, index) => (
            <li key={index} className="w-22">
              <Card {...card} />
            </li>
          ))}
      </ul>
    </section>
  );
};

MenuCards.propTypes = {
  allCards: PropTypes.array.isRequired,
};
