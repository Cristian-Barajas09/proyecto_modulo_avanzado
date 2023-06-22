-- Active: 1686681943139@@127.0.0.1@3306@productos
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


CREATE TABLE usuarios(
    id_usuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    birthdate DATE,
    telefono VARCHAR(15),
    password VARCHAR(200) NOT NULL,
    tipo_usuario SET('admin','user','empleado') DEFAULT 'user'
);


SELECT * FROM usuarios;
SELECT * FROM productos;


DROP TABLE usuarios;