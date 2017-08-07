import React from 'react';
import PropTypes from 'prop-types';
import './square.css';

const idFilter = (item2) => item => item.id === item2.id;
const getElementFromId = (array, image) => array.filter(idFilter(image))[0];

const Square = ({ image, sortedListWithPosition, handleClick, pathname }) => {
  const currentElement = getElementFromId(sortedListWithPosition, image);
  return (
  <div onClick={(e) => handleClick(e, image.id)}
       onContextMenu={(e) => handleClick(e, image.id)}
       className="square bg"
       style={{
         left: currentElement.left,
         top: currentElement.top || 0,
         backgroundImage: `url("${pathname}${image.src}")`,
         transition: `opacity ${currentElement.opacityDelay}s, top 1s, left 1s`,
         opacity: currentElement.opacity,
       }}>
    <div className="content">{image.rate}</div>
  </div>)};

Square.propTypes = {
  image: PropTypes.object.isRequired,
  sortedListWithPosition: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Square;