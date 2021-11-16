import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Details = (props) => {
  const { id } = props;
  const bankData = useSelector((state) => state[0]);
  const elementData = bankData.filter((element) => element.id === id);
  return (
    <div>
      <p>
        Country Name
        {elementData.nombre}
      </p>
      <p>
        Deaths
        {elementData.today_deaths}
      </p>
      <p>
        Recovered
        {elementData.recovered}
      </p>
    </div>
  );
};

Details.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Details;
