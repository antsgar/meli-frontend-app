const parseCondition = (condition) => {
    switch (condition) {
        case "new":
            return "Nuevo";
        case "used":
            return "Usado";
        default:
            return "Nuevo";
    }
};

export default parseCondition;
