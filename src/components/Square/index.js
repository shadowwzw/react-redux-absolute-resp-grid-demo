import React from 'react';
import PropTypes from 'prop-types';
import './square.css';

const getFromId = (item2) => item => item.id === item2.id;

const Square = ({ image, sortedListWithPosition, handleClick, pathname, opacity }) => (
  <div onClick={(e) => handleClick(e, image.id)}
       onContextMenu={(e) => handleClick(e, image.id)}
       className="square bg"
       style={{
         left: sortedListWithPosition.filter(getFromId(image))[0].left,
         top: sortedListWithPosition.filter(getFromId(image))[0].top || 0,
         backgroundImage: `url("${pathname}${image.src}")`,
         transition: `opacity ${sortedListWithPosition.filter(getFromId(image))[0].opacityDelay}s, top 1s, left 1s`,
         opacity: sortedListWithPosition.filter(getFromId(image))[0].opacity,
       }}>
    <div className="content">{image.rate}</div>
  </div>);

Square.PropTypes = {
  image: PropTypes.object.isRequired,
  sortedListWithPosition: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Square;