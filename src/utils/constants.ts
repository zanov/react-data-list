import {Itransaction} from 'src/interfaces/interfaces';

export enum errorClass {
  'Module::SystemError' = 'System',
  'Module::RemoteError' = 'Remote',
  'Module::ConfigurationError' = 'Unknown',
}

export enum transactionType {
  'SaleTransaction' = 'Sale',
  'Sale3dTransaction' = 'Sale3d',
  'AuthorizeTransaction' = 'Authorize',
}

export const sampleTransaction: Itransaction = {
  id: 0,
  status: '',
  created_at: '',
  merchant_name: '',
  terminal_name: '',
  type: '',
  error_class: '',
  error_message: '',
  card_holder: '',
  card_number: '',
  amount: '',
  currency: '',
  unique_id: '',
};

export const sortableColumns = [
  'status',
  'created_at',
  'merchant_name',
  'type',
  'error_class',
  'card_holder',
  'card_number',
  'amount',
];

export const filterOptions = {
  columns: [
    'id',
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
    'created_at',
  ],
  matchTypes: ['equal', 'starts with', 'ends with', 'contains', 'date-range'],
};
