import { Injectable } from "@angular/core";

@Injectable()
export class TokenStorageService {

  public setToken(token: string): void {
    localStorage.setItem("api-token", token);
  }

  public token(): string {
    return localStorage.getItem("api-token");
  }

  public deleteToken(): void {
    localStorage.removeItem("api-token");
  }
}
