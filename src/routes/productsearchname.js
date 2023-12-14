const express = require("express");
const router = express.Router();
const productsearchname = require("../controller/productsearchname");

/**
 * @openapi
 * /api/product:
 *   get:
 *     summary: Get all products
 *     description: Retrieve all products available.
 *     responses:
 *       '200':
 *         description: List of products successfully retrieved.
 *       '500':
 *         description: Error retrieving the list of products.
 *     tags:
 *       - Products
 */

router.get("/productsearchname/:product_name", productsearchname.searchName);
module.exports = router;
