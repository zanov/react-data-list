import React, {memo, useState, useMemo} from 'react';
import {Itransaction} from 'Interfaces/interfaces';
import {sortableColumns} from 'src/utils/constants';
import TableRow from 'Components/TableRow';

const TableSortable = memo(function TableList({items, sortable = true, ...props}: any) {
  const [sort, setSort] = useState({
    key: '',
    direction: '',
  });

  const handleSort = (key: any) => {
    if (!sortable) {
      return;
    }
    if (!sortableColumns.includes(key)) {
      return;
    }
    let direction = 'asc';
    if (sort.key === key && sort.direction === 'asc') {
      direction = 'desc';
    }
    setSort({key, direction});
  };

  const sortedData = useMemo(() => {
    if (!sort.key) return items;
    return [...items].sort((a, b) => {
      if (sort.direction === 'asc') {
        return a[sort.key].localeCompare(b[sort.key]);
      }
      if (sort.direction === 'desc') {
        return b[sort.key].localeCompare(a[sort.key]);
      }
      return 0;
    });
  }, [items, sort]);

  return (
    <table className='table'>
      <thead>
        <tr>
          {props.tableFields.map((header: any) => (
            <th
              key={header}
              onClick={() => handleSort(header)}
              className={
                sortable && sortableColumns.includes(header) ? 'text-decoration-underline' : ''
              }
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item: Itransaction) => (
          <TableRow key={item.id} rowColumns={props.tableFields} {...item} />
        ))}
      </tbody>
    </table>
  );
});

export default TableSortable;
