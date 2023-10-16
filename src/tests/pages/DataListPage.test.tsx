import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import DataListPage from 'Pages/DataListPage';

test('renders Data list Page', () => {
  const {getByText} = render(<DataListPage />);
  const linkElement = getByText(/Data list Page/i);
  expect(linkElement).toBeInTheDocument();
});
