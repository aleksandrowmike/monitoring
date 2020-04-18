import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { IAuth, IUserAuth } from "../../models/auth.interface";
import { UserService } from "../../services/user.service";
import { AuthUser, AuthUserSuccess, EAuthActions, UserLogOut } from "../actions/auth.actions";
import { ResetDataStudent } from "../actions/student.actions";
import { IAppState } from "../state/app.state";

@Injectable()
export class AuthEffects {
  @Effect()
  authUser$ = this._actions$.pipe(
    ofType<AuthUser>(EAuthActions.AuthUser),
    map(action => action.payload),
    switchMap((action: IUserAuth) => this._userService.authUser(action).pipe(
      switchMap((res: IAuth) => {
        return  of(new AuthUserSuccess({token: res.token, remember: action.remember}));
      }),
      tap(() => this.router.navigate(["/"])),
    )),
  );
  @Effect()
  userLogOut$ = this._actions$.pipe(
    ofType<UserLogOut>(EAuthActions.UserLogOut),
    switchMap(() => of(new ResetDataStudent())),
  );
  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private router: Router,
    private _store: Store<IAppState>) {}
}
