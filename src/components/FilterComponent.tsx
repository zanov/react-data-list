import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {applyFilters} from 'Redux/actions';

const FilterComponent = () => {
  const dispatch = useDispatch();

  const [selectedFilter, setSelectedFilter] = useState('');
  const [newFilters, setNewFilters] = useState([] as any);
  const [filterValue, setFilterValue] = useState('');
  const [matchBy, setMatchBy] = useState('equal');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const filterColumns = [
    'status',
    'merchant_name',
    'terminal_name',
    'type',
    'error_class',
    'error_message',
    'card_holder',
    'card_number',
    'amount',
    'currency',
  ];

  const matchOptions = ['equal', 'starts with', 'ends with', 'contains'];
  const availableFilters = filterColumns.filter(
    (filter) => !newFilters.some((newFilter: {column: string}) => newFilter.column === filter),
  );

  const addFilter = () => {
    if (selectedFilter) {
      const newFilter = {
        column: selectedFilter,
        matchBy,
        value: filterValue,
      };
      setNewFilters([...newFilters, newFilter]);
      setSelectedFilter('');
      setFilterValue('');
      setMatchBy('equal');
    }
  };

  const removeFilter = (index: number) => {
    const updatedFilters = newFilters.filter((_: any, i: number) => i !== index);
    setNewFilters(updatedFilters);
  };

  const updateFilter = (index: number, key: string, value: string) => {
    const updatedFilters = newFilters.map((filter: any, i: number) =>
      i === index ? {...filter, [key]: value} : filter,
    );
    setNewFilters(updatedFilters);
  };

  const applyFiltersToItems = () => {
    const filters: any = [...newFilters];

    if (fromDate && toDate) {
      const dateRangeFilter = {
        column: 'created_at',
        matchBy: 'daterange',
        value: {from: fromDate, to: toDate},
      };
      filters.push(dateRangeFilter);
    }

    dispatch(applyFilters(filters));
  };

  return (
    <div className='container-xl mt-3'>
      <div className='row'>
        <div className='col-md-3 mb-2'>
          <div className='input-group'>
            <label className='input-group-text'>From</label>
            <input
              type='datetime-local'
              className='form-control'
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
        </div>
        <div className='col-md-3 mb-2'>
          <div className='input-group'>
            <label className='input-group-text'>To</label>
            <input
              type='datetime-local'
              className='form-control'
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
        <div className='col-md-6 mb-2'>
          <button className='btn btn-primary' onClick={applyFiltersToItems}>
            Apply Filters
          </button>
        </div>
      </div>
      {newFilters.map((filter: any, index: number) => (
        <div key={index} className='row mb-2'>
          <div className='col-md-3'>
            <span className='form-control-plaintext'>{filter.column}</span>
          </div>
          <div className='col-md-2'>
            <select
              className='form-select'
              value={filter.matchBy}
              onChange={(e) => updateFilter(index, 'matchBy', e.target.value)}
            >
              {matchOptions.map((match) => (
                <option key={match} value={match}>
                  {match}
                </option>
              ))}
            </select>
          </div>
          <div className='col-md-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter a value'
              value={filter.value}
              onChange={(e) => updateFilter(index, 'value', e.target.value)}
            />
          </div>
          <div className='col-md-1'>
            <button className='btn btn-danger' onClick={() => removeFilter(index)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className='row mb-2'>
        <div className='col-md-2 mb-2'>
          <select
            className='form-select'
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value=''>Select a filter</option>
            {availableFilters.map((column) => (
              <option key={column} value={column}>
                {column}
              </option>
            ))}
          </select>
        </div>
        {selectedFilter && (
          <>
            <div className='col-md-2 mb-2'>
              <select
                className='form-select'
                value={matchBy}
                onChange={(e) => setMatchBy(e.target.value)}
              >
                {matchOptions.map((match) => (
                  <option key={match} value={match}>
                    {match}
                  </option>
                ))}
              </select>
            </div>
            <div className='col-md-2 mb-2'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter a value'
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
            </div>
            <div className='col-md-1 mb-2'>
              <button className='btn btn-secondary' onClick={addFilter}>
                Add
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FilterComponent;
