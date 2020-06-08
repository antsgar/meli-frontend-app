const express = require("express");
const axios = require("axios");

const {
    ML_URL,
    MLA_URL,
    AUTHOR_FIRST_NAME,
    AUTHOR_LAST_NAME,
    ITEM_LIMIT,
} = require("../constants");
const {
    getItems,
    getItem,
    getCategoriesFromFilters,
    getCategories,
} = require("../helpers");

const itemRoutes = express.Router();

itemRoutes.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${MLA_URL}/search?q=${req.query.q}`);
        const { data } = response;

        if (response.status === 200) {
            const { results, filters } = data;

            res.status(200).json({
                author: {
                    name: AUTHOR_FIRST_NAME,
                    lastname: AUTHOR_LAST_NAME,
                },
                items: getItems(results.slice(0, ITEM_LIMIT)),
                categories: getCategoriesFromFilters(filters),
            });
            return;
        }

        res.status(response.status).json({
            error: data.message,
        });
    } catch (e) {
        res.status(500).json({
            error: e.message,
        });
    }
});

itemRoutes.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const itemResponse = await axios.get(`${ML_URL}/items/${id}`);
        const { data: itemData } = itemResponse;
        let categories = [];
        let description = "";

        if (itemResponse.status === 200) {
            const itemDescriptionResponse = await axios.get(
                `${ML_URL}/items/${id}/description`
            );
            const { data: itemDescriptionData } = itemDescriptionResponse;

            if (itemDescriptionResponse.status === 200) {
                description = itemDescriptionData.plain_text;
            }

            const item = {
                ...getItem(itemData),
                quantity: itemData.sold_quantity,
                description,
            };

            // Obtener categorías dado que pueden ser distintas a las obtenidas para la lista de resultados, 
            // y deben estar disponibles en caso de acceder a la página navegando directamente a la URL
            const categoryResponse = await axios.get(
                `${ML_URL}/categories/${itemData.category_id}`
            );
            const { data: categoryData } = categoryResponse;

            if (categoryResponse.status === 200) {
                categories = getCategories(categoryData);
            }

            res.status(200).json({
                author: {
                    name: AUTHOR_FIRST_NAME,
                    lastname: AUTHOR_LAST_NAME,
                },
                item,
                categories,
            });
            return;
        }

        res.status(itemResponse.status).json({
            error: itemData.message,
        });
    } catch (e) {
        res.status(500).json({
            error: e.message,
        });
    }
});

module.exports = itemRoutes;
