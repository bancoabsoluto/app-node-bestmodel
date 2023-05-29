import * as dotenv from 'dotenv';
import express from 'express';
import chalk from 'chalk';
import http from 'http';
import {routes} from './routes.js';
import {connect} from './helpers/mysql.js';
import path from 'path';

const server = async () => {
    const app = express();
    const server = http.createServer(app);
    
    try {
        if (process.env.NODE_ENV === 'development') {
            dotenv.config({
                path: path.join(__dirname, "../.env")
            })
        }
        
        await connect();
        routes(app);

        server.listen(3001, () => {
            console.log('Estou rodando');
        });        
    } catch (error) {
        console.log(error);
    };
};

server();