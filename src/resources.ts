// Цена автомобиля со скидкой и без
export const DEFAULT_PRICE = [3500000, 3750000];

// Сколько карточек загружается при скроле
export const PER_PAGE = 12;

export const formatPrice = (price: number): string =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
