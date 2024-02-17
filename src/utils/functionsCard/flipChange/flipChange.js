export const FlipChange = (flipCards, setFlipCards, id) => {
  const newFlipCards = flipCards.map((card) => {
    if (card.id === id) {
      return { ...card, flip: true };
    }
    return card;
  });
  setFlipCards(newFlipCards);
};
