export const CheckEquality = (setFlipCards) => {
  setFlipCards((prev) => {
    const flippedCards = prev.filter((card) => card.flip);
    if (flippedCards.length === 2) {
      if (flippedCards[0].type === flippedCards[1].type) {
        setFlipCards(
          prev.map((card) => {
            if (card.flip) {
              return { ...card, equal: true, flip: false };
            }
            return card;
          }),
        );
      } else {
        setTimeout(() => {
          setFlipCards(
            prev.map((card) => {
              if (card.flip) {
                return { ...card, flip: false };
              }
              return card;
            }),
          );
        }, 1000);
      }
    }
    return prev;
  });
};
