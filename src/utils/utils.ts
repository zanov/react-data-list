import {Itransaction} from 'src/interfaces/interfaces';
import {errorClass, transactionType} from 'src/utils/constants';
import moment from 'moment';

export const formatAmount = (amount: string, currency: string): string => {
  const numAmount = parseInt(amount) / 100;
  return `${numAmount.toFixed(2)} ${currency}`;
};

export const applyFiltersToItems = (items: Itransaction[], filters: []): Itransaction[] => {
  let filteredItems = [...items];

  filters.forEach((filter) => {
    const {column, matchBy, value} = filter;

    filteredItems = filteredItems.filter((item) => {
      const itemValue = item[column];

      switch (matchBy) {
        case 'equal':
          return itemValue === value;

        case 'starts with':
          return itemValue.startsWith(value);

        case 'ends with':
          return itemValue.endsWith(value);

        case 'contains':
          return itemValue.includes(value);

        default:
          return true;
      }
    });
  });

  return filteredItems;
};

export const formatData = (items: Itransaction[]) => {
  return items.map((item: Itransaction) => {
    item.type = transactionType[item.type];
    item.error_class = errorClass[item.error_class];
    item.amount = formatAmount(item.amount, item.currency);
    item.created_at = moment(item.created_at).format('DD-MM-YY HH:mm');
    return item;
  });
};
