import {Itransaction} from 'src/interfaces/interfaces';

export enum ErrorClass {
  'Module::SystemError' = 'System',
  'Module::RemoteError' = 'Remote',
  'Module::ConfigurationError' = 'Unknown',
}

export enum TransactionType {
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
