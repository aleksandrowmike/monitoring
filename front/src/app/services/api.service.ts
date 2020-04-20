import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as queryString from "query-string";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  private url(url: string): string {
    return environment.apiHost + "/api/" + url;
  }

  // tslint:disable-next-line:no-any
  public get(url: string, data: object = {}): Observable<any> {
    if (Object.keys(data).length > 0) {
      url += "?" + queryString.stringify(data);
    }
    return this.http.get(this.url(url));
  }

  // tslint:disable-next-line:no-any
  public post(url: string, data: object, options: object = {}): Observable<any> {
    return this.http.post(this.url(url), data, options);
  }

  // tslint:disable-next-line:no-any
  public delete(url: string): Observable<any> {
    return this.http.delete(this.url(url));
  }

  // tslint:disable-next-line:no-any
  public put(url: string, data: object): Observable<any> {
    return this.http.put(this.url(url), data);
  }

}
