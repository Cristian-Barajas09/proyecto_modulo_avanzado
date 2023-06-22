import { Router } from "express";
import { auth } from "../controller/auth.controller.js";


const router = Router()


router.route("/ingresar")
    .get(auth.signin)
    .post(auth.signinValidate)

router.route("/registrarse")
    .get((req,res)=> {
        res.render("auth/signup")
    })
    .post(auth.signupValidate)

export default router;
