import { Router } from "express";
import { auth } from "../controller/auth.controller.js";
import validate from "../lib/auth.lib.js";

const router = Router()


router.route("/ingresar")
    .get(validate.inactivo,auth.signin)
    .post(validate.inactivo,auth.signinValidate)

router.route("/registrarse")
    .get(validate.inactivo,(req,res)=> {
        res.render("auth/signup")
    })
    .post(validate.inactivo,auth.signupValidate)

export default router;
