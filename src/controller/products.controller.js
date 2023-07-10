import { parse } from "dotenv";
import { pool } from "../config/mysql.connector.js";
import { actions} from "../lib/actions.lib.js";
export const products = {};

products.getProduct = async(req,res)=>{
    let hayProductos = false;
    const [result] = await  pool.query("SELECT * FROM productos")


    if(result == []) {

        hayProductos = false
    } else {
        hayProductos = true
    }


    return res.render("products/index",{products:result,hayProductos})
}

products.getProductById = async(req,res)=>{
    const id = parseInt(req.params.id);
    const [result] = await pool.query("SELECT * FROM  productos WHERE id_producto = ?",[id]);
    const [proveedor] = await pool.query("SELECT * FROM proveedores WHERE id_proveedor = ?",[result[0].id_proveedor]);

    if(!result[0]) return res.json({message:"producto no encontrado"}).status(404);
    res.render("products/product",{product:result,proveedor});
}

products.createProduct = async (req,res)=> {
    try {
        const {nombre,proveedor,precio,cantidad,categoria} = req.body


        const newProduct = {
            nombre,
            cantidad: parseInt(cantidad),
            precio:parseInt(precio),
            id_proveedor:parseFloat(proveedor),
            id_categoria:parseInt(categoria)
        }
        await pool.query("INSERT INTO productos SET ?",[newProduct])
        res.redirect("/productos").status(200)
    } catch(err) {
        console.log(err)

    }
}
products.updateProduct = async(req,res)=>{
    try {
        console.log(req.body)
        const {nombre,proveedor,precio,cantidad,categoria} = req.body
        const id = parseInt(req.params.id)
        const updateProduct = {
            nombre,
            cantidad: parseInt(cantidad),
            precio:parseInt(precio),
            id_proveedor:parseFloat(proveedor),
            id_categoria:parseInt(categoria)
        }
        await pool.query("UPDATE productos SET ? WHERE id_producto = ?",[updateProduct,id])
        res.json({response:"actualizado"})
    } catch( err ){
        console.error(err);
    }
}

products.deleteProduct = async(req,res)=> {
    const { id } = req.params;

    await pool.query("DELETE FROM productos WHERE id_producto = ?",[id]);
    res.json({response:"eliminado"})
}

products.renderCreateProducts = async(req,res)=>{
    const [proveedores] = await pool.query("SELECT * FROM proveedores");
    const [categorias] = await pool.query("SELECT * FROM categorias");
    res.render("products/create",{proveedores,categorias})
}

products.renderUpdateProducts = async(req,res)=>{
    const { id } = req.params;


    const [product,proveedor,categoria,proveedores,categorias] = await actions.update(id)

    res.render('products/update',{product,proveedores,categorias,proveedor,categoria})
}
