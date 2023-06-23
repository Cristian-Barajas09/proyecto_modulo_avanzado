
import { pool } from "../config/mysql.connector.js"
import { actions } from "../lib/actions.lib.js"
export const prov = {}




prov.getProvs = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM proveedores")
    res.render("proveedores/index", { proveedores: result })
}

prov.getProv = async(req,res)=> {
    const { id } = req.params
    const [proveedor] = await pool.query("SELECT * FROM proveedores WHERE id_proveedor = ?",[id])
    res.render("proveedores/prov",{proveedor})
}



prov.renderCreate = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM categorias")
    res.render("proveedores/create", { result })
}

prov.create = async (req, res) => {
    try {
        const { nombre, id_categoria } = req.body
        const newProveedor = {
            nombre,
            id_categoria: parseInt(id_categoria)
        }
        await pool.query("INSERT INTO proveedores SET ?", [newProveedor])
        res.redirect("/proveedores/")
    } catch (err) {
        console.error(err)
    }
}

prov.delete = async (req,res) => {

        const { id } = req.params;
        await pool.query("DELETE FROM proveedores WHERE id_proveedor = ?",[id])
        res.json({message:"proveedor eliminado"})
}

prov.renderUpdate = async(req,res)=>{
    const { id } = req.params
    const [proveedor,categoria,categorias] = await actions.provUpdate(id)
    res.render("proveedores/update",{
        proveedor,categoria,categorias
    })
}

prov.update = async(req,res)=>{
    try {
        const {nombre,categoria} = req.body
        const id = parseInt(req.params.id)
        const updateProv = {
            nombre,
            id_categoria:parseInt(categoria)
        }
        await pool.query("UPDATE proveedores SET ? WHERE id_proveedor = ?",[updateProv,id])
        res.json({response:"actualizado"})
    } catch( err ){
        console.error(err);
    }
}