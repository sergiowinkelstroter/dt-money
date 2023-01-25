export const priceFormatted = (price: number) => {
  const priceF = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return priceF;
};

export const dateFormatter = (date: Date) => {
  const dateF = new Intl.DateTimeFormat("pt-BR").format(date);

  return dateF;
};
