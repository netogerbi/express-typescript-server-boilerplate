import HomeRouter from './home-router';
import { Router } from 'express';

export default class Routes {
  public routes: Router[] = [
    new HomeRouter().router,
  ];

  constructor() {}
}
