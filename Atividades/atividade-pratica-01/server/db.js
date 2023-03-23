import mysql from "mysql";


export const db = mysql.createConnection(
    {
        host:"localhost",
        user: "root",
        password: "my2712",
        database: "pratica"
    }
);