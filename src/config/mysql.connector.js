import mysql from 'mysql2/promise';
import { keys } from './keys.js';



export const pool = mysql.createPool(keys)

try {
    await pool.getConnection();
    console.log("database is connected");
} catch(err){
    console.log(err);
}


