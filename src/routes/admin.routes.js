import { Router } from "express";
import auth from "../lib/auth.lib.js";
import { admin } from "../controller/admin.controller.js";


const router =  Router()

router.get("/admin",auth.esAdmin,admin.index)



export default router;