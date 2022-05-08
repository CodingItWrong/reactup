import {render, screen} from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('renders a welcome message', () => {
    render(<App />);

    expect(screen.getByText('Hello, world.')).toBeInTheDocument();
  });
});
