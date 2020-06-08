const getPriceDecimals = (price) => {
    return parseInt(price.toString().split(".")[1]);
};

const getPicture = (thumbnail, pictures) => {
    // Get picture if available, if not thumbnail. Parse url to get picture of higher quality and through https
    const picture = pictures ? pictures[0].url : thumbnail;
    return picture.replace("-I", "-O").replace("http", "https")
}

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
        picture: getPicture(thumbnail, pictures),
        condition,
        free_shipping: shipping.free_shipping,
    };
};

module.exports = getItem;
