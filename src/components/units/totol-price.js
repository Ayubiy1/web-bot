export const totolPrice = (item) => {
  return item.reduce((a, c) => a + c.price * c.quantity, 0);
};
