import { Router } from "express";
import { products } from "../controller/products.controller.js";
const router = Router()

router.route("/productos")
    .get(products.getProduct)
    .post(products.createProduct);


router.route("/productos/producto/:id/")
    .get(products.getProductById)
    .put(products.updateProduct)
    .delete(products.deleteProduct);

router.get("/productos/create",products.renderCreateProducts)
router.get("/productos/update/:id",products.renderUpdateProducts)


export default router;