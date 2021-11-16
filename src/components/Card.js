import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Card = (props) => {
  const { id, name, totalDeaths } = props;

  return (
    <li key={id} className="spain-container">
      <p className="title">{name}</p>
      <div className="data">
        <p>
          total deaths:
          {totalDeaths}
        </p>
      </div>
      <button type="button">see details</button>
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  totalDeaths: PropTypes.number.isRequired,
};

export default Card;
