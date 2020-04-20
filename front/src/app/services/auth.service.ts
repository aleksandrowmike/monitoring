import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { User } from "../models/user";
import { AuthResponse, SignUpForm } from "../modules/auth/interface/sign-up-form";
import { ApiService } from "./api.service";
import { TokenStorageService } from "./token-storage.service";

@Injectable()
export class AuthService {
  private user$: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);

  constructor(private api: ApiService, private tokenStorageService: TokenStorageService) {}

  public register(registerForm: SignUpForm): Observable<AuthResponse> {
    return this.api.post("auth/sign-up", registerForm).pipe(
      map(response => response.data),
    );
  }

  public signIn(signInForm: SignInForm): Observable<AuthResponse> {
    return this.api.post("auth/sign-in", signInForm).pipe(
      map(response => response.data),
      tap((auth: AuthResponse) => this.user$.next(auth.user)),
    );
  }
  public signOut(): void {
    this.tokenStorageService.deleteToken();
    this.user$.next(undefined);
  }
}
export interface SignInForm {
  email: string;
  password: string;
}
