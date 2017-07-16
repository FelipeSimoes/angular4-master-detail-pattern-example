import { DefaultController } from './controller';
import { profile } from '../models';

export class ProfilesController extends DefaultController {
  protected model: any = profile;
  public path: string = 'profiles';
}
