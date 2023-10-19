export interface Itransaction {
  id: number;
  status: string;
  created_at: string;
  merchant_name: string;
  terminal_name: string;
  type: string;
  error_class: string;
  error_message: string;
  card_holder: string;
  card_number: string;
  amount: string;
  currency: string;
  unique_id: string;
}
