import React, {useEffect} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchItem} from 'src/redux/actions';
import type {RootState, AppDispatch} from 'Redux/configureStore';

const DetailsDataPage = () => {
  const {itemId} = useParams();
  const selectedItemState: TypedUseSelectorHook<RootState> = useSelector(
    (state: any) => state?.dataReducer?.selectedItem,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchItem(itemId));
  }, []);

  const renderTransactionDetails = () => {
    return Object.entries(selectedItemState).map(([key, value]) => (
      <div key={key} className='row'>
        <dt className='col-sm-4'>{key}:</dt>
        <dd className='col-sm-8'>{value}</dd>
      </div>
    ));
  };

  return (
    <div>
      <h1>Details for Transaction with id: {itemId}</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>{renderTransactionDetails()}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDataPage;
