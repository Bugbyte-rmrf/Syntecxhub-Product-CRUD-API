const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow the API to read JSON request bodies
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Product CRUD API",
    endpoints: "/api/products",
  });
});

// Product routes
app.use("/api/products", productRoutes);

// Handle invalid JSON request bodies
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON in request body",
    });
  }

  next(err);
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Handle unexpected server errors
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// Start the server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
