import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Router from 'Components/Router';
import '@testing-library/jest-dom';

test('renders DataListPage for the root path', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Router />
    </MemoryRouter>,
  );

  expect(screen.getByText(/Data List Page/i)).toBeInTheDocument();
});

test('renders DetailsDataPage for a specific item ID', () => {
  render(
    <MemoryRouter initialEntries={['/details/123']}>
      <Router />
    </MemoryRouter>,
  );

  expect(screen.getByText(/Details Data Page/i)).toBeInTheDocument();
});

test('renders PageNotFound for an unknown path', () => {
  render(
    <MemoryRouter initialEntries={['/unknown-path']}>
      <Router />
    </MemoryRouter>,
  );

  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
});
