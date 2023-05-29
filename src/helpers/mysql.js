import mariadb from 'mariadb';

var con;

export const connect = async () => {
    con = await mariadb.createConnection({
        host: process.env.MARIA_DB_HOST,
        user: process.env.MARIA_DB_USER,
        password: process.env.MARIA_DB_PASSWORD,
        database: process.env.MARIA_DB_DATABASE
    });
};

export const mysql = () => {
    console.log(con);
    return con;
};