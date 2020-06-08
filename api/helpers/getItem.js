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
        // Get picture if available, if not parse thumbnail url to get higher quality picture
        picture: pictures ? pictures[0].url : thumbnail.replace("-I", "-O"),
        condition,
        free_shipping: shipping.free_shipping,
    };
};

module.exports = getItem;
