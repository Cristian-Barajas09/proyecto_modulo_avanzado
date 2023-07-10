import { Router } from "express";
import { control } from '../controller/categoria.controller.js'


const router = Router();


router.get("/categorias",control.index);
router.get("/categorias/create/",control.renderCreate);
router.post("/categorias/create/",control.create)


router.get("/categorias/categoria/:id",control.getCategoria)


export default router;