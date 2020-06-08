const getPriceDecimals = (price) => {
    return parseInt(price.toString().split(".")[1]);
};

const getPicture = (thumbnail, pictures) => {
    // Obtener primera imagen si está disponible, sino usar thumbnail
    // Parsear la url para obtener imagen de mejor calidad y a través de https
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
