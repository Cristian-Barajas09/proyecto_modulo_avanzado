import { parse } from "dotenv";
import { pool } from "../config/mysql.connector.js";
import { productMethod } from "../lib/products.js";
export const products = {};

products.getProduct = async(req,res)=>{
    const [result] = await  pool.query("SELECT * FROM productos")
    return res.render("products/index",{products:result})
}

products.getProductById = async(req,res)=>{
    const id = parseInt(req.params.id);
    const [result] = await pool.query("SELECT * FROM  productos WHERE id_producto = ?",[id]);
    if(!result[0]) return res.json({message:"producto no encontrado"}).status(404);
    res.render("products/product",{product:result});
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
        res.redirect("/products").status(200)
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


    const [product,proveedor,categoria,proveedores,categorias] = await productMethod.update(id)

    res.render('products/update',{product,proveedores,categorias,proveedor,categoria})
}
