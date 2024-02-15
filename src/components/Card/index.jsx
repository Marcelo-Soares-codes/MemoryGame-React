import React, { useState } from 'react';
import CardFlip from 'react-card-flip';

export const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        className="bg-segundaryColorBlue border-primaryColorBlue border-4 rounded-xl w-full cursor-pointer p-2"
        onClick={handleClick}
      >
        <img src="logo.png" className="logo" alt="Front" />
      </div>
      <div
        className="bg-segundaryColorBlue border-primaryColorBlue border-4 rounded-xl w-full cursor-pointer p-4"
        onClick={handleClick}
      >
        <img src="Nest.png" className="logo" alt="Back" />
      </div>
    </CardFlip>
  );
};
