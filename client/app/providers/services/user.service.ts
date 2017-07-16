import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RestService } from './rest.service';

@Injectable()
export class UserService extends RestService {
  protected modelName: string = 'users';
  constructor(protected http: Http) {
    super(http);
  }
}
