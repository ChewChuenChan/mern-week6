const ProductController = require ('../controllers/product.controller');

module.exports =(app) =>{
    app.post("/api/products/create",ProductController.createProduct);
    app.get("/api/products",ProductController.getAllProducts);
    app.get("/api/products/:id",ProductController.getProductById);

}