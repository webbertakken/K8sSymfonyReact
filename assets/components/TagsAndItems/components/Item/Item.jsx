import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ name }) => {
  const sayHi = () => {
    alert(`My name is ${name}`);
  };

  return (
    <div className="item">
      Item: <button onClick={sayHi}>{ name }</button>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Item;
