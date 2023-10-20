import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import DataListPage from 'Pages/DataListPage';
import {fetchAllItems} from 'Redux/actions';

const mockStore = configureStore([]);

describe('DataListPage Component', () => {
  it('renders without crashing', () => {
    const store = mockStore({dataReducer: {items: []}});

    const {container} = render(
      <Provider store={store}>
        <DataListPage />
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });

  it('displays the filter component', () => {
    const store = mockStore({dataReducer: {items: []}});

    const {getByText} = render(
      <Provider store={store}>
        <DataListPage />
      </Provider>,
    );

    expect(getByText('Data list Page')).toBeInTheDocument();
    expect(getByText('FilterComponent')).toBeInTheDocument();
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
