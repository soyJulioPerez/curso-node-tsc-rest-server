import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';

import db from '../db/connetion';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: '/api/usuarios'
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    this.dbConnetion();
    this.middlewares();
    this.routes();
  }

  async dbConnetion() {
    try {
      await db.authenticate();
      console.log('Database online');
    } catch (error) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    this.app.use(express.static('public'));

  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto:: ' + this.port);
    });
  }
}

export default Server;
