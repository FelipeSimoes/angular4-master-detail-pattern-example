import * as express from 'express';
import * as controllers from './controllers/index';

export function setRoutes(app: express): any {

  const router: express.Router = express.Router();
  // interate to generate crud
  for (let controller in controllers) {
    if (controllers.hasOwnProperty(controller)) {
      const ctrl: any = new controllers[controller]();
      router.route(`/${ctrl.path}`).get(ctrl.getAll);
      router.route(`/${ctrl.path}/:unique`).get(ctrl.getOne);
      router.route(`/${ctrl.path}`).post(ctrl.create);
      router.route(`/${ctrl.path}/:unique`).put(ctrl.update);
      router.route(`/${ctrl.path}/:unique`).delete(ctrl.delete);
    }
  }
  app.use('/api', router);
}
