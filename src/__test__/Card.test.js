import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Card from '../components/Card';
import '@testing-library/jest-dom/extend-expect';

describe('Card testing', () => {
  test('renders Card component correctly', () => {
    const tree = render(<Provider store={store}><Router><Card /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
