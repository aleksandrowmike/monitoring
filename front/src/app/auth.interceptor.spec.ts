import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Router, RouterModule } from "@angular/router";

import { AuthInterceptor } from "./auth.interceptor";
import { TokenStorageService } from "./services/token-storage.service";

describe("AuthInterceptor", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let tokenService: TokenStorageService;
  const router = {
    navigate: jasmine.createSpy("navigate")
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: router },
        { provide: TokenStorageService, useClass: TokenStorageMock },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    tokenService = TestBed.inject(TokenStorageService);

  });

  afterEach(() => httpTestingController.verify());

  it("Сохраняет токен при его получении с api", () => {
    httpClient.get("sign-in").subscribe(
      () => expect(tokenService.token()).toEqual("auth token"),
      (error) => fail(error),
    );
    const request = httpTestingController.expectOne("sign-in");

    request.flush({}, {headers: {
        "Api-Token": "auth token",
      }});
  });

  it("Добавляет токен в каждый http запрос, при его наличии ",  () => {
    tokenService.setToken("auth token");
    httpClient.post("url", {}).subscribe();

    const req = httpTestingController.expectOne("url");

    const authHeader = req.request.headers.get("Authorization");

    expect(authHeader).toBe("Bearer auth token");

    req.flush({});
  });
  it("Не добавляет токен в каждый http запрос, при его отсутствие ",  () => {
    expect(tokenService.token()).toBeFalsy();

    httpClient.post("url", {}).subscribe();

    const req = httpTestingController.expectOne("url");
    const authHeader = req.request.headers.get("Authorization");

    expect(authHeader).toBeFalsy();

  });
  it("Не удаляет токен если он не пришел с бекенда ",  () => {

  });
});

class TokenStorageMock {
  public testToken: string;
  public setToken(token: string): void {
    this.testToken = token;
  }
  public token(): string {
    return this.testToken;
  }
}
