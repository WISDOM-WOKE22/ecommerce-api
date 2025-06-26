import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getAProduct,
  updateProduct,
} from "../../controllers/products";

const router = Router();

router.route("/").get(getAllProducts).post(createProduct);

router
  .route("/:id")
  .get(getAProduct)
  .delete(deleteProduct)
  .patch(updateProduct);

export default router;
