import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Card = (props) => {
  const { id, name, totalDeaths } = props;

  return (
    <div key={id} className="spain-container">
      <p className="title">{name}</p>
      <div className="data">
        <p>
          total deaths:
          {totalDeaths}
        </p>
      </div>
      <button type="button">see details</button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  totalDeaths: PropTypes.number,
};

Card.defaultProps = {
  id: 0,
  name: '',
  totalDeaths: 0,
};
export default Card;
