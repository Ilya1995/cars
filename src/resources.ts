export const DEFAULT_PRICE = [3500000, 3750000];
export const PER_PAGE = 6;

export const formatPrice = (price: number): string =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
