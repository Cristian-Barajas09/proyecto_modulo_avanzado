import { Router } from "express";
import { user } from "../controller/user.controller.js";
const router = Router()


router.route("/user")
    .get(user.index)


router.get("/logout",user.logout)



export default router