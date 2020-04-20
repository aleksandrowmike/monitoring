import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { Department } from "../../models/department";
import { IDirections } from "../../models/directions.interface";
import { IFaculties } from "../../models/faculties.interface";
import { ApiService } from "../../services/api.service";
import { StudentsService } from "../../services/students.service";
import { EDepartmentsActions, GetAllDepartments, GetAllDepartmentsSuccess } from "../actions/departments.actions";
import { IAppState } from "../state/app.state";

@Injectable()
export class DepartmentsEffects {
  @Effect()
  getAllDepartments$ = this.actions$.pipe(
    ofType<GetAllDepartments>(EDepartmentsActions.GetAllDepartments),
    switchMap(() => this.api.get("departments").pipe(map(response => response.data))),
    switchMap((departments: Department[]) => of(new GetAllDepartmentsSuccess(departments))),
  );
  // @Effect()
  // getDirectionsFaculties$ = this._actions$.pipe(
  //   ofType<GetDirectionsFaculties>(EFacultiesActions.GetDirectionsFaculties),
  //   map(action => action.payload.facultiesId),
  //   switchMap((id: number) => this._studentsService.getDirectionsFaculties(id)),
  //   switchMap((directions: IDirections[]) => of(new GetDirectionsFacultiesSuccess(directions))),
  // );
  constructor(
    private api: ApiService,
    private actions$: Actions,
    private store: Store<IAppState>,
  ) {}
}
