import express, { Router, Response, Request } from 'express';

export default class HomeRouter {
  private path: string = '/';
  public router: Router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.getAll);
  }

  /**
   * @method getAll GET:/ - gets the package.json version
   */
  private getAll(_: Request, res: Response): void {
    const { version, name } = require('./../../package.json');
    res.status(200).send({ name, version });
  }
}
