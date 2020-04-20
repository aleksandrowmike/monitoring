import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest, HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { TokenStorageService } from "./services/token-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private apiTokenName = "Api-Token";

  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
  ) {}

  // tslint:disable-next-line:no-any
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenStorage.token();

    if (token) {
      request = request.clone({setHeaders: {Authorization: `Bearer ${token}`}});
    }

    return next.handle(request).pipe(
      // tslint:disable-next-line:no-any
      tap((response: HttpResponse<any>) => {
          if (response.headers && response.headers.get(this.apiTokenName)) {
            this.tokenStorage.setToken(response.headers.get(this.apiTokenName));
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.tokenStorage.deleteToken();
            this.router.navigateByUrl("/auth");
          }
        }),
    );
  }
}


