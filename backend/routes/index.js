import express from "express";

import  { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct
} from '../controllers/Products.js'

const router = express.Router();
router.get('/',getAllProducts)
router.post('/',createProduct)
router.get('/:id',getProductById)
router.patch('/:id',updateProduct)

export default router;
