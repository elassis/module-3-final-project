import React from 'react';
import { Routes, Navigate } from 'react-router-dom';
import { Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
      <Route path="/details">
        <Navigate to="/" />
      </Route>
    </Routes>
  </>
);

export default App;
