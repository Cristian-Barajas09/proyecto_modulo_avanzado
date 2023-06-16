import { Router } from "express";
import { products } from "../controller/products.js";
const router = Router()

router.route("/")
    .get(products.getProduct)
    .post(products.createProduct);


router.route("/:id")
    .get(products.getProductById)
    .put(products.updateProduct)
    .delete(products.deleteProduct);

router.get("/create/product/",products.renderCreateProducts)
router.get("/update/:id",products.renderUpdateProducts)


export default router;