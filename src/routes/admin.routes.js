import { Router } from "express";
import auth from "../lib/auth.lib.js";
import { admin } from "../controller/admin.controller.js";


const router =  Router()

router.get("/admin",auth.esAdmin,admin.index)

router.get('/admin/edit/:id',auth.esAdmin,admin.edit)



export default router;