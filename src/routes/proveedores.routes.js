import { Router } from "express";
import { prov } from "../controller/proveedores.controller.js";
const router = Router()

router.route("/proveedores")
    .get(prov.getProvs)
    .post(prov.create)

router.route("/proveedores/proveedor/:id")
    .get(prov.getProv)
    .delete(prov.delete)
    .put(prov.update)

router.get("/proveedores/create",prov.renderCreate)

router.get("/proveedores/update/:id",prov.renderUpdate)




export default router