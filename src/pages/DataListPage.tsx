import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllItems} from 'Redux/actions';

const DataListPage = () => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllItems());
  }, []);

  return (
    <div>
      <h1>Data list Page</h1>
    </div>
  );
};

export default DataListPage;
