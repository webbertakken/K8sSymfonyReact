import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name }) => (
  <div className="badge badge-pill badge-secondary" style={{ padding: '7px' }}>
    <span>Category | { name }</span>
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tag;
