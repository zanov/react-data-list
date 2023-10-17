import {combineReducers} from 'redux';
import {FETCH_ALL_ITEMS_SUCCESS, FETCH_ITEM_BY_ID} from 'Redux/actions';

const initialState = {
  items: [],
  selectedItem: null,
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ALL_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_ITEM_BY_ID:
      return {
        ...state,
        selectedItem: state.items.find((item) => item.id === action.payload),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataReducer,
});

export default (state: any, action: any) => {
  return rootReducer(state, action);
};
