import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import DataListPage from 'Pages/DataListPage';
import {fetchAllItems} from 'Redux/actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('DataListPage Component', () => {
  it('renders without crashing', () => {
    const store = mockStore({
      dataReducer: {
        items: [
          {
            id: 1,
            status: 'approved',
            created_at: '16-06-17 06:30',
            merchant_name: 'Merchant_115',
            terminal_name: 'Terminal 1',
            type: 'Sale',
            error_class: '',
            error_message: '',
            card_holder: 'Manfred Man',
            card_number: '421234...1234',
            amount: '120.00 USD',
            currency: 'USD',
            unique_id: '3afed9dd95ecb85bd723c7f3b0f71550',
          },
        ],
      },
    });

    const {container} = render(
      <Provider store={store}>
        <DataListPage />
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });

  it('displays the filter component', () => {
    const store = mockStore({
      dataReducer: {
        items: [
          {
            id: 1,
            status: 'approved',
            created_at: '16-06-17 06:30',
            merchant_name: 'Merchant_115',
            terminal_name: 'Terminal 1',
            type: 'Sale',
            error_class: '',
            error_message: '',
            card_holder: 'Manfred Man',
            card_number: '421234...1234',
            amount: '120.00 USD',
            currency: 'USD',
            unique_id: '3afed9dd95ecb85bd723c7f3b0f71550',
          },
        ],
      },
    });

    const {getByText} = render(
      <Provider store={store}>
        <DataListPage />
      </Provider>,
    );

    expect(getByText('Data list Page')).toBeInTheDocument();
  });

  it('dispatches fetchAllItems action on mount', () => {
    const store = mockStore({dataReducer: {items: []}});

    render(
      <Provider store={store}>
        <DataListPage />
      </Provider>,
    );

    const actions = store.getActions();
    expect(actions).toContainEqual(fetchAllItems());
  });
});
