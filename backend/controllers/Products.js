

import Product  from "../models/productsModel.js";


//getAllProducts Funcation
export const getAllProducts = async (req, res) => {
        try {
            const products = await Product.findAll();
            res.json(products);

        }catch (error){

            res.json({ message: error.message });
        }


}

//getProductById Funcation
export const getProductById = async (req, res) => {
    try {
        const products = await Product.findAll({
            where:{
                id: req.params.id 
            }
        });
        res.json(products[0]);

    }catch (error){

        res.json({ message: error.message });
    }


}

//createProduct Funcation
export const createProduct = async (req, res) => {
    try {
        const products = await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });

    }catch (error){

        res.json({ message: error.message });
    }


}


//updateProduct Funcation
export const updateProduct = async (req, res) => {
    try {
        const products = await Product.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated !"
        });

    }catch (error){

        res.json({ message: error.message });
    }


}



//deleteProduct Funcation
export const deleteProduct = async (req, res) => {
    try {
        const products = await Product.destroy({
            where:{
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted !"
        });

    }catch (error){

        res.json({ message: error.message });
    }
}