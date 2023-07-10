import {  pool  } from '../config/mysql.connector.js'

export const control = {}

control.index = async(req,res)=> {
    const [categorias] = await pool.query("SELECT * FROM categorias")
    res.render("categorias/index",{categorias});
}

control.renderCreate = (req,res)=> {
    res.render("categorias/create");
}


control.create = async(req,res)=> {
    try{
        console.log("entre")
        const { nombre } = req.body;

        console.log(nombre)
        await pool.query("INSERT INTO categorias (nombre) VALUES (?)",[nombre])

        return res.redirect("/categorias")
    }catch(err ){
        console.error(err)
    }
}

control.getCategoria = async(req,res) => {
    const { id } =req.params

    const [result] = await pool.query("SELECT * FROM categorias WHERE id_categorias = ?",[id])

    return res.render("categorias/categoria",{result})
}