import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import DetailsDataPage from 'Pages/DetailsDataPage';

const mockStore = configureStore([]);

describe('DetailsDataPage Component', () => {
  it('renders without crashing', () => {
    const store = mockStore({
      dataReducer: {
        selectedItem: {
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
      },
    });

    const {container} = render(
      <Provider store={store}>
        <DetailsDataPage />
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });
});
