import {Itransaction} from 'src/interfaces/interfaces';

export const FETCH_ALL_ITEMS_BEGIN = 'FETCH_ALL_ITEMS_BEGIN';
export const FETCH_ALL_ITEMS_SUCCESS = 'FETCH_ALL_ITEMS_SUCCESS';
export const FETCH_ALL_ITEMS_FAILURE = 'FETCH_ALL_ITEMS_FAILURE';

export const FETCH_ITEM_BY_ID_BEGIN = 'FETCH_ITEM_BY_ID_BEGIN';
export const FETCH_ITEM_BY_ID_SUCCESS = 'FETCH_ITEM_BY_ID_SUCCESS';
export const FETCH_ITEM_BY_ID_FAILURE = 'FETCH_ITEM_BY_ID_FAILURE';

export const APPLY_FILTERS = 'APPLY_FILTERS';

export const fetchAllItemsBegin = () => ({
  type: FETCH_ALL_ITEMS_BEGIN,
});

export const fetchAllItemsSuccess = (data: any) => ({
  type: FETCH_ALL_ITEMS_SUCCESS,
  payload: data.payment_transactions,
});

export const fetchAllItemsFailure = (error: any) => ({
  type: FETCH_ALL_ITEMS_FAILURE,
  payload: {error},
});

export const fetchItemBegin = () => ({
  type: FETCH_ITEM_BY_ID_BEGIN,
});

export const fetchItemSuccess = (item: Itransaction) => ({
  type: FETCH_ITEM_BY_ID_SUCCESS,
  payload: item,
});

export const fetchItemFailure = (error: any) => ({
  type: FETCH_ITEM_BY_ID_FAILURE,
  payload: {error},
});

export const applyFilters = (filters: any) => {
  return {
    type: APPLY_FILTERS,
    filters,
  };
};

export const fetchAllItems = (filters = {}) => {
  return (dispatch: any) => {
    dispatch(fetchAllItemsBegin());

    const data = {...filters};

    return fetch('/api/get-data')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchAllItemsSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchAllItemsFailure(err));
        console.error('Error fetching data:', err);
        return Promise.reject(err);
      });
  };
};

export const fetchItem = (id: any) => {
  return (dispatch: any) => {
    dispatch(fetchItemBegin());

    return fetch(`/api/data-items/${id}`)
      .then((response) => response.json())
      .then((item) => {
        dispatch(fetchItemSuccess(item));
      })
      .catch((err) => {
        dispatch(fetchItemFailure(err));
        console.error('Error fetching patment info:', err);
        return Promise.reject(err);
      });
  };
};
