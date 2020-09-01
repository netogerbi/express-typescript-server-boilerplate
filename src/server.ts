import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import Routes from './routes';

export default class ServerSetup {
  public app: Application;
  public port: number;
  public routes: Router[];

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.routes = new Routes().routes;

    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
  }

  private initializeRoutes(): void {
    this.routes.forEach((route) => {
      this.app.use('/', route);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  getApp(): Application {
    return this.app;
  }
}
