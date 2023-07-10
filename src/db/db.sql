-- Active: 1687916797927@@127.0.0.1@3306@productos
CREATE DATABASE productos;

USE productos;

DELIMITER //
CREATE FUNCTION getAge(fecha DATE)
RETURNS INT
BEGIN



END //

DELIMITER ;


CREATE TABLE usuarios (
    id_usuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    birthdate DATE,
    telefono VARCHAR(15),
    password VARCHAR(200) NOT NULL,
    tipo_usuario SET('admin','user','empleado') DEFAULT 'user'
);



CREATE TABLE carrito (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_producto INT NOT NULL,
    add_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_carrito_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    CONSTRAINT fk_carrito_producto FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

CREATE TABLE facturas(
    id_factura INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total FLOAT NOT NULL,

    CONSTRAINT fk_factura_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE saldo(
    codigo VARCHAR(250) NOT NULL PRIMARY KEY,
    id_usuario INT NOT NULL,
    saldo INT NOT NULL,

    CONSTRAINT fk_saldo_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)

);


SELECT password FROM usuarios;
SELECT * FROM productos;


DROP TABLE saldo;

DELIMITER//
CREATE PROCEDURE getUser(IN id INT)
BEGIN

    SELECT id_usuario,name,lastname,email,birthdate,telefono,tipo_usuario FROM usuarios WHERE id_usuario = id;


END //

DELIMITER ;




SHOW TABLES;


