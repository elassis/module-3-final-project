import React from 'react';
import '../App.css';
import Card from './Card';

const Home = () => {
  const mockCountry = [
    {
      id: 0,
      name: 'spain',
      totalDeaths: 5000,
    },
  ];
  const mockRegions = [
    {
      id: 1,
      name: 'madrid',
      totalDeaths: 5000,
    },
    {
      id: 2,
      name: 'barcelona',
      totalDeaths: 4000,
    },
    {
      id: 3,
      name: 'malella',
      totalDeaths: 3000,
    },
  ];
  return (
    <>
      <ul className="main-container">
        <p>country</p>
        {mockCountry.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            name={country.name}
            totalDeaths={country.totalDeaths}
          />
        ))}
        <p>sort by regions</p>
        {mockRegions.map((region) => (
          <Card
            key={region.id}
            id={region.id}
            name={region.name}
            totalDeaths={region.totalDeaths}
          />
        ))}
      </ul>
    </>
  );
};

export default Home;
