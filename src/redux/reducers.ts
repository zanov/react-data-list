import {combineReducers} from 'redux';
import {FETCH_ALL_ITEMS_SUCCESS, FETCH_ITEM_BY_ID_SUCCESS} from 'Redux/actions';

const initialState = {
  items: [],
  selectedItem: {},
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ALL_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_ITEM_BY_ID_SUCCESS:
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
