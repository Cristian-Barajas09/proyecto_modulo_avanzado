import { pool } from "../config/mysql.connector.js"
export const prov = {}

prov.getProv = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM proveedores")
    res.render("proveedores/index", { proveedores: result })
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
    try {
        const { id } = req.body;
        await pool.query("DELETE FROM proveedores WHERE id_proveedor = ?",[id])
    }catch(err) {
        console.error(err)
    }
}