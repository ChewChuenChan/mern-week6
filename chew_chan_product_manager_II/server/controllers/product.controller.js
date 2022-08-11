const Product = require('../models/product.model');

module.exports ={
    //function to create a product list
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
};

