import React, { useContext, useState, useEffect } from 'react';
import { flipCardsContext } from '../../Context/useFlipCards';
import { PopupCompleted } from '../../../components/PopupCompleted/index';

export const CheckAllCorrect = () => {
  const { flipCards, setFlipCards } = useContext(flipCardsContext);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let correctCards = 0;

    flipCards.forEach((card) => {
      if (card.equal) {
        correctCards++;
      }
    });

    if (correctCards === flipCards.length) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1200);

      // Limpar o timeout quando o componente for desmontado ou quando o estado mudar
      return () => clearTimeout(timer);
    }

    // Resetar o estado do popup quando a condição não for mais atendida
    setShowPopup(false);
  }, [flipCards]); // Executar o efeito sempre que flipCards mudar

  return (
    // Renderizar o componente PopupCompleted se showPopup for verdadeiro
    // Caso contrário, retornar nulo para não renderizar nada
    showPopup ? <PopupCompleted /> : null
  );
};
