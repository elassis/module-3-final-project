import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/reducer';

const Details = () => {
  const dispatch = useDispatch();
  const { country } = useParams();
  const dateRequest = new Date();
  const URL = `https://api.covid19tracking.narrativa.com/api/${dateRequest.getFullYear()}-${dateRequest.getMonth()}-${dateRequest.getDate()}/country/`;
  const [fetchedData, setFetchedData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getCountryData = async (id) => {
      const response = await fetch(`${URL}${id}`);
      const resp = await response.json();
      const date = Object.keys(resp.dates);
      const countryData = Object.values(resp.dates[date].countries);
      setFetchedData(countryData);
    };
    getCountryData(country);
  }, []);

  const handleBackHome = () => {
    dispatch(getData());
    navigate('/');
  };
  return (
    <div>
      <button type="button" className="home-btn" onClick={handleBackHome}>&#10094;</button>
      <div className="upper-section-details">
        <img src="/world-logo.png" alt="logo" className="details-logo" />
        <p className="country-name-details">
          {country}
        </p>
      </div>
      <h3>detailed information</h3>
      <div className="data-detail">
        <p>Total confirmed</p>
        <p>{fetchedData[0] ? fetchedData[0].yesterday_confirmed : null }</p>
      </div>
      <div className="data-detail">
        <p>Total Deaths</p>
        <p>{fetchedData[0] ? fetchedData[0].today_deaths : null }</p>
      </div>
      <div className="data-detail">
        <p>Total Recovered</p>
        <p>{fetchedData[0] ? fetchedData[0].yesterday_recovered : null }</p>
      </div>
    </div>
  );
};

export default Details;
