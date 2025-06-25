import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getAProduct } from "../../controllers/products";

const router = Router();

router.route('/').get(getAllProducts).post(createProduct)

router.route('/:id').get(getAProduct).delete(deleteProduct)

export default router;