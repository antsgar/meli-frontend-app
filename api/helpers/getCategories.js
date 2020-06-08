const getCategories = ({ path_from_root }) => {
    return path_from_root.map(({ name }) => name);
};

module.exports = getCategories;
