const getCategories = require("./getCategories");

const getCategoriesFromFilters = (filters) => {
    const categoryFilter = filters.find(
        ({ id, values }) => id === "category" && values.length > 0
    );
    return categoryFilter ? getCategories(categoryFilter.values[0]) : [];
};

module.exports = getCategoriesFromFilters;
