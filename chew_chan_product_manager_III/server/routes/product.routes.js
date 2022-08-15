const ProductController = require ('../controllers/product.controller');

module.exports =(app) =>{
    app.get("/api/products",ProductController.getAllProducts);
    app.post("/api/products/create",ProductController.createProduct);
    app.get("/api/products/:id",ProductController.getProductById);
    app.put("/api/products/:id",ProductController.updateProductById);
    app.delete("/api/products/:id",ProductController.deleteProductById);
}