const products = [];
let nextId = 1;

// GET /api/products
// List products with category filtering, price filtering and pagination
const getProducts = (req, res) => {
  const { category, minPrice, maxPrice, page = "1", limit = "10" } = req.query;

  // Validate pagination parameters
  const pageNumber = Number(page);
  const limitNumber = Number(limit);

  if (
    !Number.isInteger(pageNumber) ||
    pageNumber < 1 ||
    !Number.isInteger(limitNumber) ||
    limitNumber < 1 ||
    limitNumber > 100
  ) {
    return res.status(400).json({
      success: false,
      message: "Page must be a positive integer and limit must be between 1 and 100",
    });
  }

  // Validate price filters
  let minimum;
  let maximum;

  if (minPrice !== undefined) {
    minimum = Number(minPrice);

    if (minPrice.trim() === "" || !Number.isFinite(minimum) || minimum < 0) {
      return res.status(400).json({
        success: false,
        message: "minPrice must be a non-negative number",
      });
    }
  }

  if (maxPrice !== undefined) {
    maximum = Number(maxPrice);

    if (maxPrice.trim() === "" || !Number.isFinite(maximum) || maximum < 0) {
      return res.status(400).json({
        success: false,
        message: "maxPrice must be a non-negative number",
      });
    }
  }

  if (
    minimum !== undefined &&
    maximum !== undefined &&
    minimum > maximum
  ) {
    return res.status(400).json({
      success: false,
      message: "minPrice cannot be greater than maxPrice",
    });
  }

  // Start with all products
  let filteredProducts = [...products];

  // Filter by category
  if (category !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.category.toLowerCase() === category.trim().toLowerCase()
    );
  }

  // Filter by minimum price
  if (minimum !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= minimum
    );
  }

  // Filter by maximum price
  if (maximum !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= maximum
    );
  }

  // Calculate pagination
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / limitNumber);
  const startIndex = (pageNumber - 1) * limitNumber;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + limitNumber
  );

  return res.status(200).json({
    success: true,
    count: paginatedProducts.length,
    pagination: {
      totalProducts,
      totalPages,
      currentPage: pageNumber,
      limit: limitNumber,
      hasNextPage: pageNumber < totalPages,
      hasPreviousPage: pageNumber > 1 && totalPages > 0,
    },
    data: paginatedProducts,
  });
};

// GET /api/products/:id
// Retrieve one product
const getProductById = (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isSafeInteger(id) || id < 1) {
    return res.status(400).json({
      success: false,
      message: "Product ID must be a positive integer",
    });
  }

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: product,
  });
};

// POST /api/products
// Create a product
const createProduct = (req, res) => {
  const { name, price, description, category } = req.body || {};

  // Validate required fields
  if (
    typeof name !== "string" ||
    !name.trim() ||
    price === undefined ||
    typeof description !== "string" ||
    !description.trim() ||
    typeof category !== "string" ||
    !category.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: "Name, price, description and category are required",
    });
  }

  const numericPrice = Number(price);

  if (
    (typeof price !== "number" && typeof price !== "string") ||
    (typeof price === "string" && price.trim() === "") ||
    !Number.isFinite(numericPrice) ||
    numericPrice < 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Price must be a non-negative number",
    });
  }

  const newProduct = {
    id: nextId++,
    name: name.trim(),
    price: numericPrice,
    description: description.trim(),
    category: category.trim(),
  };

  products.push(newProduct);

  return res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: newProduct,
  });
};

// PUT /api/products/:id
// Update an existing product
const updateProduct = (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isSafeInteger(id) || id < 1) {
    return res.status(400).json({
      success: false,
      message: "Product ID must be a positive integer",
    });
  }

  const productIndex = products.findIndex((item) => item.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  const { name, price, description, category } = req.body || {};

  if (
    typeof name !== "string" ||
    !name.trim() ||
    price === undefined ||
    typeof description !== "string" ||
    !description.trim() ||
    typeof category !== "string" ||
    !category.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: "Name, price, description and category are required",
    });
  }

  const numericPrice = Number(price);

  if (
    (typeof price !== "number" && typeof price !== "string") ||
    (typeof price === "string" && price.trim() === "") ||
    !Number.isFinite(numericPrice) ||
    numericPrice < 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Price must be a non-negative number",
    });
  }

  products[productIndex] = {
    id,
    name: name.trim(),
    price: numericPrice,
    description: description.trim(),
    category: category.trim(),
  };

  return res.status(200).json({
    success: true,
    message: "Product updated successfully",
    data: products[productIndex],
  });
};

// DELETE /api/products/:id
// Delete a product
const deleteProduct = (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isSafeInteger(id) || id < 1) {
    return res.status(400).json({
      success: false,
      message: "Product ID must be a positive integer",
    });
  }

  const productIndex = products.findIndex((item) => item.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];

  return res.status(200).json({
    success: true,
    message: "Product deleted successfully",
    data: deletedProduct,
  });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
