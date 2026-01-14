import React, {useEffect, useState} from 'react';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import {fetchAllItems} from 'Redux/actions';
import TableSortable from 'Components/TableSortable';
import FilterComponent from 'Components/FilterComponent';
import {sampleTransaction} from 'src/utils/constants';
import type {RootState, AppDispatch} from 'Redux/configureStore';

const DataListPage = () => {
  const itemsState: TypedUseSelectorHook<RootState> = useSelector(
    (state: any) => state.dataReducer.items,
  );
  const dispatch = useDispatch<AppDispatch>();

  const tableHeaders = [
    'status',
    'created_at',
    'merchant_name',
    'type',
    'error_class',
    'card_holder',
    'card_number',
    'amount',
  ];

  useEffect(() => {
    dispatch(fetchAllItems());
  }, []);

  return (
    <div>
      <h1>Data list Page</h1>
      <FilterComponent />
      <TableSortable items={itemsState} tableFields={tableHeaders} />
    </div>
  );
};

export default DataListPage;
