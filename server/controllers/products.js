import Product  from "../models/productsModel.js";


//API FOR createProduct

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