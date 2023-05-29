import {mysql} from '../helpers/mysql.js';

/*export const getUsers = async (req, res) => {
    const {query} = mysql();
    const users = await query('SELECT * FROM customers');
    res.status(200).json(users);
};*/


export const getUsers = async (req, res) => {
    const connection = mysql();
    const users = await connection.query('SELECT * FROM customers');
    res.status(200).json(users);
};