import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getAProduct,
  updateProduct,
} from "../../controllers/products";
import { validateData } from "../../middlewares/validation";
import { productSchema } from "../../db/schemas/productSchema";

const router = Router();

router
  .route("/")
  .get(getAllProducts)
  .post(validateData(productSchema), createProduct);

router
  .route("/:id")
  .get(getAProduct)
  .delete(deleteProduct)
  .patch(updateProduct);

export default router;
