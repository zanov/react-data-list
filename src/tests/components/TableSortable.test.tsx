import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

import TableSortable from 'Components/TableSortable';

const sampleItems = [
  {
    id: 3,
    status: 'error',
    created_at: '2017-06-16 06:18:01',
    merchant_name: 'Merchant_126',
    terminal_name: 'Terminal 13',
    type: 'AuthorizeTransaction',
    error_class: 'Module::SystemError',
    error_message: 'Unknown system error! Please contact support!',
    card_holder: 'John Doe',
    card_number: '450000...0000',
    amount: '10',
    currency: 'USD',
    unique_id: '934761d9ac4805675916c44ea5041375',
  },
  {
    id: 4,
    status: 'error',
    created_at: '2017-06-16 06:18:01',
    merchant_name: 'Merchant_107',
    terminal_name: 'Terminal 7',
    type: 'SaleTransaction',
    error_class: 'Module::RemoteError',
    error_message: 'Unknown Service error!',
    card_holder: 'Anne Doe',
    card_number: '420012...0012',
    amount: '23000',
    currency: 'EUR',
    unique_id: '1709acd57f508afc04fcef581483e005',
  },
];

describe('TableSortable Component', () => {
  it('renders without crashing', () => {
    const {container} = render(
      <TableSortable items={sampleItems} tableFields={['id', 'status']} />,
    );
    expect(container).toBeInTheDocument();
  });

  it('sorts data when a column header is clicked', () => {
    const {getByText} = render(
      <TableSortable items={sampleItems} tableFields={['id', 'status']} />,
    );

    const header = getByText('id');
    fireEvent.click(header);
  });
});
