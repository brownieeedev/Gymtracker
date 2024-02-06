import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

//Connecting to mysql
export const con = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })
  .promise();
