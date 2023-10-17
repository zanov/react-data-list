export const FETCH_ALL_ITEMS_BEGIN = 'FETCH_ALL_ITEMS_BEGIN';
export const FETCH_ALL_ITEMS_SUCCESS = 'FETCH_ALL_ITEMS_SUCCESS';
export const FETCH_ALL_ITEMS_FAILURE = 'FETCH_ALL_ITEMS_FAILURE';

export const FETCH_ITEM_BY_ID = 'FETCH_ITEM_BY_ID';

export const fetchAllItemsBegin = () => ({
  type: FETCH_ALL_ITEMS_BEGIN,
});

export const fetchAllItemsSuccess = (data) => ({
  type: FETCH_ALL_ITEMS_SUCCESS,
  payload: data.payment_transactions,
});

export const fetchAllItemsFailure = (error) => ({
  type: FETCH_ALL_ITEMS_FAILURE,
  payload: {error},
});

export const fetchAllItems = (filters = {}) => {
  return (dispatch) => {
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
