const express = require("express");
const axios = require("axios");

const { ML_URL, MLA_URL, AUTHOR_FIRST_NAME, AUTHOR_LAST_NAME, ITEM_LIMIT } = require("../constants");
const { getItems, getItem, getCategoriesFromFilters, getCategories } = require("../helpers");

const itemRoutes = express.Router();

itemRoutes.get("/", async (req, res) => {
    const { q: search = "" } = req.query;

    try {
        const response = await axios.get(`${MLA_URL}/search?q=${search}`);
        const { data } = response;
        const { results, filters } = data;

        res.status(200).json({
            author: {
                name: AUTHOR_FIRST_NAME,
                lastname: AUTHOR_LAST_NAME,
            },
            items: getItems(results.slice(0, ITEM_LIMIT)),
            categories: getCategoriesFromFilters(filters),
        });
    } catch (e) {
        if (e.response) {
            res.status(e.response.status).json({
                error: e.response.data.message,
            });
            return;
        }

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

        const itemDescriptionResponse = await axios.get(`${ML_URL}/items/${id}/description`);
        const { data: itemDescriptionData } = itemDescriptionResponse;
        description = itemDescriptionData.plain_text;

        const item = {
            ...getItem(itemData),
            quantity: itemData.sold_quantity,
            description,
        };

        // Obtener categorías dado que pueden ser distintas a las obtenidas para la lista de resultados,
        // y deben estar disponibles en caso de acceder a la página navegando directamente a la URL
        const categoryResponse = await axios.get(`${ML_URL}/categories/${itemData.category_id}`);
        const { data: categoryData } = categoryResponse;
        categories = getCategories(categoryData);

        res.status(200).json({
            author: {
                name: AUTHOR_FIRST_NAME,
                lastname: AUTHOR_LAST_NAME,
            },
            item,
            categories,
        });
    } catch (e) {
        if (e.response) {
            res.status(e.response.status).json({
                error: e.response.data.message,
            });
            return;
        }

        res.status(500).json({
            error: e.message,
        });
    }
});

module.exports = itemRoutes;
