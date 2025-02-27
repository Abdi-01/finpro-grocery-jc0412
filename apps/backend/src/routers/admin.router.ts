import { Router } from 'express';
import { AdminController } from '../controllers/admin.controller';

export class AdminRouter {
  private route: Router;
  private adminController: AdminController;

  constructor() {
    this.route = Router();
    this.adminController = new AdminController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.route.get('/', this.adminController.getAdmin);
    this.route.patch('/', this.adminController.updateAdmin);
    this.route.post('/create', this.adminController.createAdmin);
    this.route.post('/assign-store', this.adminController.assignStoreAdmin);
  }

  public getRouter() {
    return this.route;
  }
}
