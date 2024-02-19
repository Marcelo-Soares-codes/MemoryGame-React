import { useContext } from 'react';

import { flipCardsContext } from '../../utils/Context/useFlipCards';
import { reducer } from '../../utils/Reducer/index';

export const Header = () => {
  const { flipCards, setFlipCards } = useContext(flipCardsContext);

  const handleClick = ({ target }) => {
    const { value } = target;
    const updatedFlipCards = reducer(flipCards, { type: value }); // Chama o reducer com o tipo correto

    setFlipCards(updatedFlipCards); // Atualiza o contexto com o novo estado
  };

  return (
    <header className="h-40 w-full bg-white shadow-md shadow-primaryColorBlue">
      <div className="h-32 w-full relative flex items-center justify-between">
        <img src="logo.png" alt="spelet" className="h-full mx-auto" />
      </div>
      <div className="h-8 text-center font">
        <select
          className="h-full w-full sm:w-2/12 min-w-24 text-center text-lg appearance-none text-primaryColorBlue border-t-2 sm:border-2 border-grey  rounded-md focus:outline-segundaryColorBlue hover:border-primaryColorBlue focus:bg-white"
          style={{
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
          }}
          onChange={handleClick}
          defaultValue="Medium"
        >
          <option value="Easy">EASY</option>
          <option value="Medium">MEDIUM</option>
          <option value="Hard">HARD</option>
        </select>
      </div>
    </header>
  );
};
