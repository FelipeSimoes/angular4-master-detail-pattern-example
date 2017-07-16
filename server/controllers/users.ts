import { DefaultController } from './controller';
import { user } from '../models';

export class UsersController extends DefaultController {
  protected model: any = user;
  public path: string = 'users';
}
