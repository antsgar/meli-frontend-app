const getPriceDecimals = (price) => {
    return parseInt(price.toString().split(".")[1]);
};

const getItem = ({
    id,
    title,
    price,
    currency_id,
    thumbnail,
    pictures,
    condition,
    shipping,
}) => {
    return {
        id,
        title,
        price: {
            currency: currency_id,
            amount: price,
            decimals: getPriceDecimals(price),
        },
        picture: pictures ? pictures[0].url : thumbnail,
        condition,
        free_shipping: shipping.free_shipping,
    };
};

module.exports = getItem;
