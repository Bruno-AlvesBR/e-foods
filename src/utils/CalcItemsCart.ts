const CalcPriceItem = (price: number, count: number): number => {
  const productPrice = price * count;

  return productPrice;
};

export { CalcPriceItem };
