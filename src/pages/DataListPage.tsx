import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllItems} from 'Redux/actions';
import TableSortable from 'Components/TableSortable';
import {Itransaction} from 'src/interfaces/interfaces';
import {ErrorClass, TransactionType, sampleTransaction} from 'src/utils/constants';
import {formatAmount} from 'src/utils/utils';
import moment from 'moment';

const DataListPage = () => {
  const itemsState: any = useSelector((state) => state.dataReducer.items);
  const dispatch = useDispatch();

  const [searchFilters, setSearchFilters] = useState({});
  const [dataItems, setDataItems] = useState([] as Itransaction[]);

  const tableHeaders = Object.keys(sampleTransaction);

  /* const handleFilterChange = (e: any) => {
    const {name, value} = e.target;
    const {...otherFilters} = searchFilters;
    const filters = value ? {...otherFilters, [name]: value} : {...otherFilters};
    setSearchFilters(filters);
  }; */

  const formatData = (items: Itransaction[]) =>
    items.map((item: Itransaction) => {
      item.type = TransactionType[item.type];
      item.error_class = ErrorClass[item.error_class];
      item.amount = formatAmount(item.amount, item.currency);
      item.created_at = moment(item.created_at).format('DD-MM-YY HH:mm');
      return item;
    });

  useEffect(() => {
    dispatch(fetchAllItems());
  }, []);

  useEffect(() => {
    setDataItems(formatData(itemsState));
  }, [itemsState]);

  return (
    <div>
      <h1>Data list Page</h1>
      <TableSortable items={dataItems} filters={searchFilters} tableFields={tableHeaders} />
    </div>
  );
};

export default DataListPage;
