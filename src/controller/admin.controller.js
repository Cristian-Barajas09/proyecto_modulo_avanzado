import { pool } from '../config/mysql.connector.js'
export const admin = {}


admin.index =async(req,res)=>{
    const [users] = await pool.query("SELECT id_usuario,name,lastname,tipo_usuario FROM usuarios")
    res.render("admin/index",{users})
}

admin.edit = async(req,res) => {
    const { id } = req.params;
    const [ [  user  ] ] = await pool.query("CALL getUser(?);",[id]);

    res.render("admin/edit",{user});
}