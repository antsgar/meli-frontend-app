const parsePrice = (price) => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: price.currency,
        minimumFractionDigits: 0,
    }).format(Math.round(price.amount));
};

export default parsePrice;
