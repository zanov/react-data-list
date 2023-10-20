import {combineReducers} from 'redux';
import {FETCH_ALL_ITEMS_SUCCESS, FETCH_ITEM_BY_ID_SUCCESS, APPLY_FILTERS} from 'Redux/actions';
import {applyFiltersToItems, formatData} from 'src/utils/utils';

const initialState = {
  items: [],
  selectedItem: {},
  filters: [],
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ALL_ITEMS_SUCCESS:
      const formattedData = formatData(action.payload);
      return {
        ...state,
        items: formattedData,
      };
    case FETCH_ITEM_BY_ID_SUCCESS:
      return {
        ...state,
        selectedItem: action.payload,
      };
    case APPLY_FILTERS:
      const filteredItems = applyFiltersToItems(state.items, action.filters);
      return {
        ...state,
        filters: action.filters,
        items: filteredItems,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
