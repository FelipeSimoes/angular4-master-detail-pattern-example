import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export abstract class RestService {

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'charset': 'UTF-8',
   });
  private options: RequestOptions = new RequestOptions({ headers: this.headers });
  protected modelName: string;
  protected prefix: string = 'api';
  protected uniqueKey: string = 'id';

  constructor(protected http: Http) { }

  get url(): string {
    return `/${this.prefix}/${this.modelName}`;
  }

  currentPath(model: any): string {
    return `${this.url}/${model[this.uniqueKey]}`;
  }

  create(model: any): Observable<any> {
    return this.http.post(this.url, JSON.stringify(model), this.options);
  }

  getAll(): Observable<any> {
    return this.http.get(this.url).map(res => res.json());
  }

  get(model: any): Observable<any> {
    return this.http.get(this.currentPath(model)).map(res => res.json());
  }

  update(model: any): Observable<any> {
    return this.http.put(this.currentPath(model), JSON.stringify(model), this.options);
  }

  delete(model: any): Observable<any> {
    return this.http.delete(this.currentPath(model), this.options);
  }
}
