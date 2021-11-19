import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home testing', () => {
  test('renders Home component correctly', () => {
    const tree = render(<Provider store={store}><Router><Home /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
