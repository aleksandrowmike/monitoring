import { Action } from "@ngrx/store";
import { IUserAuth } from "../../models/auth.interface";

export enum EAuthActions {
  AuthUser = "[Auth] User Authorization",
  AuthUserSuccess = "[Auth] User Authorization success",
  AuthUserFail = "[Auth] User Authorization fail",
  UserLogOut = "[Auth] User log out",
  GetDataUser = "[User] Get data user",
  GetDataUserSuccess = "[User] Get data user success"
}
export class AuthUser implements Action {
  public readonly type = EAuthActions.AuthUser;
  constructor(public payload: IUserAuth ) {}
}
export class AuthUserSuccess implements Action {
  public readonly type = EAuthActions.AuthUserSuccess;
  constructor(public payload: {token: string, remember: boolean}) {}
}
export class UserLogOut implements Action {
  public readonly type = EAuthActions.UserLogOut;
}
export type AuthActions = AuthUser | AuthUserSuccess | UserLogOut ;
