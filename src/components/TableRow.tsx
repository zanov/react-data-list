import React, {memo} from 'react';
import {Link} from 'react-router-dom';

const TableRow = memo(function TableRow({...props}: any) {
  return (
    <tr>
      {props.rowColumns.map((k: any) => (
        <td key={k}>
          {k === 'created_at' ? <Link to={`details/${props['id']}`}>{props[k]}</Link> : props[k]}
        </td>
      ))}
    </tr>
  );
});

export default TableRow;
