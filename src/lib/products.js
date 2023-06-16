import { pool } from "../config/mysql.connector.js";
export const productMethod = {}

productMethod.update = async(id)=> {
    const [product] = await pool.query('SELECT * FROM productos WHERE id_producto = ?',[id]);
    const [proveedor] = await pool.query("SELECT * FROM proveedores WHERE id_proveedor = ?",[product[0].id_proveedor])
    const [categoria] = await pool.query("SELECT * FROM categorias WHERE id_categoria = ?",[product[0].id_categoria])
    const [proveedores] = await pool.query("SELECT nombre FROM proveedores WHERE id_proveedor != ?",[proveedor[0].id_proveedor]);
    const [categorias] = await pool.query("SELECT nombre FROM categorias WHERE  id_categoria != ?",[categoria[0].id_categoria]);

    return [product,proveedor,categoria,proveedores,categorias];
}