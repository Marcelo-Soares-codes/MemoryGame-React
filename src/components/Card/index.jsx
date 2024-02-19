import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import CardFlip from 'react-card-flip';

import { flipCardsContext } from '../../utils/Context/useFlipCards';
import { CanFlip } from '../../utils/functionsCard/canFlip/canFlip';
import { FlipChange } from '../../utils/functionsCard/flipChange/flipChange';
import { CheckEquality } from '../../utils/functionsCard/checkEquality/checkEquality';

export const Card = ({ id, img, equal, flip }) => {
  const { flipCards, setFlipCards } = useContext(flipCardsContext);

  const handleClick = () => {
    if (CanFlip(flipCards, id)) {
      FlipChange(flipCards, setFlipCards, id);
      CheckEquality(setFlipCards);
    }
  };

  return (
    <CardFlip isFlipped={equal ? true : flip} flipDirection="horizontal">
      <div
        className="bg-segundaryColorBlue border-primaryColorBlue rounded-xl w-full h-full cursor-pointer p-2"
        onClick={handleClick}
      >
        <img src="logo.png" alt="Front" />
      </div>
      <div
        className="bg-segundaryColorBlue border-primaryColorBlue rounded-xl w-full h-full cursor-pointer p-4"
        onClick={handleClick}
      >
        <img src={img} alt="Back" />
      </div>
    </CardFlip>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  equal: PropTypes.bool.isRequired,
  flip: PropTypes.bool.isRequired,
};
