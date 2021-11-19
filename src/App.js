import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:country" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
