import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const TableRow = memo(function TableRow({...props}: any) {
  const formatValue = (key: string, value: any) => {
    if (key === 'created_at') {
      return moment(value).format('YY-MM-DD HH:mm');
    }
    return value;
  };

  return (
    <tr>
      {props.rowColumns.map((k: any) => (
        <td key={k}>
          {k === 'created_at' ? (
            <Link to={`details/${props['id']}`}>{formatValue(k, props[k])}</Link>
          ) : (
            formatValue(k, props[k])
          )}
        </td>
      ))}
    </tr>
  );
});

export default TableRow;
