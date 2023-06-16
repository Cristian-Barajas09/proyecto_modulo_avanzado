import { Router } from "express";
import { prov } from "../controller/proveedores.controller.js";
const router = Router()

router.route("/proveedores")
    .get(prov.getProv)
    .post(prov.create)
router.get("/proveedores/create",prov.renderCreate)
router.get("/provedores/:id",)

export default router