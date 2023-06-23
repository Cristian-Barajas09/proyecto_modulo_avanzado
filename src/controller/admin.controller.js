import { pool } from '../config/mysql.connector.js'
export const admin = {}


admin.index =async(req,res)=>{
    const [users] = await pool.query("SELECT name,lastname,tipo_usuario FROM usuarios")
    res.render("admin/index",{users})
}