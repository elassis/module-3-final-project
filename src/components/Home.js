import React, { useEffect } from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/reducer';
import Card from './Card';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    const loadData = async () => {
      await dispatch(getData());
    };
    if (data.length <= 0) {
      loadData();
    }
  }, []);

  return (
    <main>
      {data.map((country) => (
        <Card
          key={country.id}
          name={country.name}
          totalDeaths={country.total_deaths}
        />
      ))}
    </main>
  );
};

export default Home;
