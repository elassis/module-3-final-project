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

  return (
    <main>
      <div>
        <h2>Covid 19 Stats sorted by country</h2>
        <input type="text" className="search-bar" placeholder="write a name..." />
        <button type="button" className="search-btn" onClick={handleChange}>Search</button>
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
