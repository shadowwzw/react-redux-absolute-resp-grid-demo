import React from 'react';
import PropTypes from 'prop-types';

const getFromId = (item2) => item => item.id === item2.id;

const Square = ({ image, sortedListWithPosition, handleClick, pathname }) => (
  <div onClick={(e) => handleClick(e, image.id)}
       onContextMenu={(e) => handleClick(e, image.id)}
       className="square bg"
       style={{left: sortedListWithPosition.filter(getFromId(image))[0].left, top: sortedListWithPosition.filter(getFromId(image))[0].top || 0, backgroundImage: `url("${pathname}${image.src}")`}}>
    <div className="content">{image.rate}</div>
  </div>);

Square.PropTypes = {
  image: PropTypes.object.isRequired,
  sortedListWithPosition: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Square;