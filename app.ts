import dotenv from 'dotenv';
import Server from './models/server';
dotenv.config();

export const nombre = 'Julio Pérez';

const server = new Server();

server.listen();
