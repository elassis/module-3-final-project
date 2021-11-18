import React, { useEffect } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getData, setCountry } from '../redux/reducer';
import Card from './Card';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const test = data;
  useEffect(() => {
    const loadData = async () => {
      await dispatch(getData());
    };
    if (data.length <= 0) {
      loadData();
    }
  }, []);
  const handleChange = () => {
    const { value } = document.querySelector('.search-bar');
    const result = test.filter((country) => (country.name).toLowerCase() === value);
    if (result.length > 0) {
      dispatch(setCountry(result));
    }
  };
  const handleClear = () => {
    const bar = document.querySelector('.search-bar');
    bar.value = '';
    dispatch(getData());
  };
  const showSearchBar = () => {
    const searchSection = document.querySelector('.search-section');
    searchSection.classList.toggle('hide');
  };

  return (
    <main>
      <div className="search-container">
        <div className="top-header">
          <h2>Covid 19 Stats</h2>
          <i className="fas fa-search" aria-hidden="true" onClick={showSearchBar} />
        </div>
        <div className="main-header">
          <img src="world-logo.png" alt="header-logo" className="header-logo" />
          <p className="header-text">Here you&apos;ll find the real live information about covid 19 sorted by countries.</p>
        </div>
        <div className="search-section hide">
          <input type="text" className="search-bar" placeholder="write a name..." />
          <button type="button" className="search-btn" onClick={handleChange}>Search</button>
          <button type="button" className="search-btn clear-btn" onClick={handleClear}>clear</button>
        </div>
      </div>
      {data.map((country) => (
        <Card
          id={country.id}
          key={country.id}
          name={country.name}
          totalDeaths={country.total_deaths}
        />
      ))}
    </main>
  );
};

export default Home;
