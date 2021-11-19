import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Details from '../components/Details';
import '@testing-library/jest-dom/extend-expect';

describe('Details testing', () => {
  test('renders Details component correctly', () => {
    const tree = render(<Provider store={store}><Router><Details /></Router></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
