import React from 'react';
import ReactDOM from 'react-dom';
import HexagonButton from './HexagonButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
});
