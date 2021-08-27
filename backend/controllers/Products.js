import Product  from "../Models/productsModel.js";

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

