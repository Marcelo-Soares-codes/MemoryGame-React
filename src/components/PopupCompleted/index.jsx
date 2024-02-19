import React, { useContext } from 'react';
import { flipCardsContext } from '../../utils/Context/useFlipCards';
import { Data, dataMedium } from '../../Mocks/cardMock';

export const PopupCompleted = () => {
  const { setFlipCards } = useContext(flipCardsContext);

  const resetCards = () => {
    setFlipCards(Data(dataMedium));
  };

  const handleClick = () => {
    resetCards();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-primaryColorBlue text-white w-11/12 max-w-2xl h-96 p-3 md:px-14 rounded-4xl bg-opacity-90 flex flex-col mx-8 shadow-xl">
        <div className="flex gap-3 mt-10 opacity-100 items-center">
          <img
            src="completed-icon.svg"
            alt=""
            className="w-14 h-14 sm:w-24 sm:h-24"
          />
          <h2 className="text-left text-2xl sm:text-3xl md:text-4xl">
            Parabéns você acertou todos 🎉🎉
          </h2>
        </div>
        <button
          onClick={handleClick}
          className="bg-tertiaryColorRed w-9/12 text-4xl p-4 rounded-3xl mt-auto mb-12 block mx-auto"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};
