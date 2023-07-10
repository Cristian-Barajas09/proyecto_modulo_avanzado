import dotenv from 'dotenv';
dotenv.config();

export const keys = {
    host: process.env.HOST_DATABASE,
    user: process.env.USER_DATABASE,
    port: process.env.PORT_DATABASE,
    password: process.env.PASS_DATABASE ,
    database: process.env.NAME_DATABASE,
}
