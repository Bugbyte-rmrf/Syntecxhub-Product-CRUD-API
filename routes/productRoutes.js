const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// GET /api/products
// List products, with filtering and pagination
router.get("/", getProducts);

// POST /api/products
// Create a product
router.post("/", createProduct);

// GET /api/products/:id
// Get one product
router.get("/:id", getProductById);

// PUT /api/products/:id
// Update a product
router.put("/:id", updateProduct);

// DELETE /api/products/:id
// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
