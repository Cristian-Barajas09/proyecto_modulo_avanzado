
import { pool } from "../config/mysql.connector.js"
export const prov = {}

prov.getProvs = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM proveedores")
    res.render("proveedores/index", { proveedores: result })
}

prov.getProv = async(req,res)=> res.render("proveedores/prov")



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
    try {
        const { id } = req.body;
        console.log("welcome")
        await pool.query("DELETE FROM proveedores WHERE id_proveedor = ?",[id])
    }catch(err) {
        console.error(err)
    }
}

prov.update = async()=>{
    try {
        const {nombre,categoria} = req.body
        const id = parseInt(req.params.id)
        const updateProv = {
            nombre,
            id_categoria:parseInt(categoria)
        }
        await pool.query("UPDATE productos SET ? WHERE id_producto = ?",[updateProv,id])
        res.json({response:"actualizado"})
    } catch( err ){
        console.error(err);
    }
}