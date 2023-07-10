import dotenv from 'dotenv';
dotenv.config();

export const keys = {

    host: process.env.HOST_DATABASE,
    user: process.env.USER_DATABASE,
    port: process.env.PORT_DATABASE,
    password: process.env.PASS_DATABASE ,
    database: process.env.NAME_DATABASE,

    host: process.env.HOST_DATABASE || "localhost",
    user: process.env.USER_DATABASE || "root",
    port: process.env.PORT_DATABASE || 3306,
    password: process.env.PASS_DATABASE || "cb300804",
    database: process.env.NAME_DATABASE || "productos",

}
