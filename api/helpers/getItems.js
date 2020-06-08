const getItem = require("./getItem");

const getItems = (results) => {
    return results.map((itemData) => ({
        ...getItem(itemData),
        // Devolver provincia porque el diseño especifica mostrarla
        state_name: itemData.address.state_name,
    }));
};

module.exports = getItems;
