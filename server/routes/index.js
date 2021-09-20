import express from "express";


import  { 
    getAllProducts ,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} 
from '../controllers/products.js'



const router = express.Router();

//API ROUTES
router.get('/',getAllProducts)
router.post('/',createProduct)
router.patch('/:id',updateProduct)
router.get('/:id',getProductById)
router.delete('/:id',deleteProduct)

export default router;
