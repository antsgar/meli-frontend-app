const getItem = require("./getItem");

const getItems = (results) => {
    return results.map((itemData) => ({
        ...getItem(itemData),
        state_name: itemData.address.state_name,
    }));
};

module.exports = getItems;
