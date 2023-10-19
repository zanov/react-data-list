export const formatAmount = (amount: string, currency: string): string => {
  const numAmount = parseInt(amount) / 100;
  return `${numAmount.toFixed(2)} ${currency}`;
};
