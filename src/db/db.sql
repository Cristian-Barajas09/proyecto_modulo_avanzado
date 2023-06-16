CREATE DATABASE productos;

USE productos;

DELIMITER //
CREATE PROCEDURE getUpdateProducts(id_producto INT)
BEGIN

    SELECT * FROM productos WHERE id_producto = id_producto;
    SELECT * FROM proveedores WHERE id_proveedor = @producto.id_proveedor;
    SELECT * FROM proveedores WHERE id_categoria = @producto.id_categoria;
    SELECT * FROM proveedores WHERE id_proveedor != @provedor.id_proveedor;
    SELECT * FROM categorias WHERE id_categoria != @categoria.id_categoria;

END //

DELIMITER ;