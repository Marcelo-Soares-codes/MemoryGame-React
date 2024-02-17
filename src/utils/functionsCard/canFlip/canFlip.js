export const CanFlip = (flipCards, id) => {
  const { flip } = flipCards.find((card) => card.id === id);
  if (!flip) {
    let flipped = 0;
    flipCards.forEach((card) => {
      if (card.flip) {
        flipped++;
      }
    });
    return flipped < 2;
  }
  return false;
};
