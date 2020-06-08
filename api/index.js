const express = require("express");
const itemsRoutes = require("./routes/items");

const apiRoutes = express.Router();
apiRoutes.use("/items", itemsRoutes);

module.exports = apiRoutes;
