const Product = require('../models/product.model');

module.exports ={
    //function to create a product 
    createProduct:(req,res) =>{
        Product.create(req.body)
            .then((newProduct)=>{
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err)=>res.status(400).json({message:'something went wrong with createNewProduct',error:err}));
    },

    //function to get all products
    getAllProducts:(req,res) =>{
        Product.find({})
        .then((allProducts)=>{
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with getAllProducts',error:err}));
    },

    //function to get a single product
    getProductById: (req,res) =>{
        Product.findOne({_id:req.params.id})
        .then((oneProduct)=>{
            console.log(oneProduct);
            res.json(oneProduct);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with getAllProducts',error:err}));
    },

    // function to update existing product
    updateProductById:(req,res) =>{
        Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true,runValidators:true})
        .then((updatedProduct)=>{
            console.log(updatedProduct);
            res.json(updatedProduct);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with updateProductById',error:err}));
    },

    // function to delete a existing product
    deleteProductById:(req,res) =>{
        Product.deleteOne({_id:req.params.id})
        .then((deletedProduct)=>{
            console.log(deletedProduct);
            res.json(deletedProduct);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with deleteProductById',error:err}));
    },    

};

