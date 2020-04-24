import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { StudentsResponse } from "../../interfaces/students-response";
import { ApiService } from "../../services/api.service";
import { EStudentActions, GetStudentsByDepartment, GetStudentsByDepartmentSuccess, ParamsGetStudents } from "../actions/student.actions";

import { IAppState } from "../state/app.state";

@Injectable()
export class StudentEffects {
  @Effect()
  getStudents$ = this._actions$.pipe(
    ofType<GetStudentsByDepartment>(EStudentActions.GetStudentsByDepartment),
    map(action => action.payload),
    switchMap((params: ParamsGetStudents) => this.api
      .get("students/department/" + params.id + "/?filter=" + params.filter + "&sort=" + params.sort + "&page=" + params.page)
      .pipe(map(response => response))),
    switchMap((students: StudentsResponse) => {
      return of(new GetStudentsByDepartmentSuccess(students));
    }),
  );

  constructor(
    private _actions$: Actions,
    private api: ApiService,
    private _store: Store<IAppState>,
    private _router: Router) {}
}
