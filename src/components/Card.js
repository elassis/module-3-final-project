import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { useNavigate } from 'react-router';

const Card = (props) => {
  const { id, name, totalDeaths } = props;
  const navigate = useNavigate();
  const handleDetails = (country) => {
    navigate(`/details/${country}`);
  };
  const bgDark = 'country-container darker';
  const bgClear = 'country-container clearer';
  return (
    <div key={id} className={(id % 4 === 0 || (id - 3) % 4 === 0) ? bgDark : bgClear} aria-hidden="true" onClick={() => { handleDetails(name); }} onKeyDown={() => { handleDetails(name); }}>
      <div className="visual">
        <img src="/world-logo.png" className="img-home" alt="logo" />
        <span>&#10140;</span>
      </div>
      <div>
        <p className="title">
          {name}
        </p>
        <div className="data">
          <p>
            total deaths:
            {totalDeaths}
          </p>
        </div>
      </div>
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
