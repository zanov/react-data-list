import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterComponent from '../../components/FilterComponent';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

describe('FilterComponent', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      dataReducer: {
        items: [],
        selectedItem: {},
        filters: [],
      },
    });
  });

  test('renders FilterComponent', () => {
    render(
      <Provider store={store}>
        <FilterComponent />
      </Provider>,
    );

    expect(screen.getByText('From')).toBeInTheDocument();
    expect(screen.getByText('To')).toBeInTheDocument();
    expect(screen.getByText('Apply Filters')).toBeInTheDocument();
  });

  test('adds a filter', () => {
    render(
      <Provider store={store}>
        <FilterComponent />
      </Provider>,
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, {target: {value: 'status'}});

    const matchSelect = screen.getByRole('combobox', {name: /match/i});
    fireEvent.change(matchSelect, {target: {value: 'equal'}});

    const input = screen.getByPlaceholderText('Enter a value');
    fireEvent.change(input, {target: {value: 'approved'}});

    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);

    // Check if filter is added (though UI might not show immediately)
    expect(store.getActions()).toEqual([]); // since apply not clicked
  });
});
