import { Router } from "express";

const router = Router()


router.route("/ingresar")
    .get((req,res)=> {
        res.json({message:"ruta en construccion"})
    })
    .post((req,res)=> {
        res.json({message:"ruta en construccion"})
    })

router.route("/registrarse")
    .get((req,res)=> {
        res.json({message:"ruta en construccion"})
    })
    .post((req,res)=> {
        res.json({message:"ruta en construccion"})
    })

export default router;
