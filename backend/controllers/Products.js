import Product  from "../Models/productsModel.js";


//CREATE GET ALL PRODUCT FUNCTION 
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);

    }catch (error){

        res.json({ message: error.message });
    }
}


//CREATE PRODUCT FUNCTION 
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

//CREATE GET  PRODUCT  BY ID FUNCTION 
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



//CREATE UPDATE  PRODUCT  FUNCTION 
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


//CREATE DELETE  PRODUCT  FUNCTION 
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
