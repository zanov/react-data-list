import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailsDataPage from 'Pages/DetailsDataPage';

test('renders Data list Page', () => {
  const {getByText} = render(<DetailsDataPage />);
  const linkElement = getByText(/Details Data Page/i);
  expect(linkElement).toBeInTheDocument();
});
