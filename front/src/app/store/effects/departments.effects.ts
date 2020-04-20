import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { Department } from "../../models/department";
import { Direction } from "../../models/direction";
import { IDirections } from "../../models/directions.interface";
import { IFaculties } from "../../models/faculties.interface";
import { ApiService } from "../../services/api.service";
import { StudentsService } from "../../services/students.service";
import { EDepartmentsActions, GetAllDepartments, GetAllDepartmentsSuccess, GetDirectionsDepartment, GetDirectionsDepartmentSuccess } from "../actions/departments.actions";
import { IAppState } from "../state/app.state";

@Injectable()
export class DepartmentsEffects {
  @Effect()
  getAllDepartments$ = this.actions$.pipe(
    ofType<GetAllDepartments>(EDepartmentsActions.GetAllDepartments),
    switchMap(() => this.api.get("departments").pipe(map(response => response.data))),
    switchMap((departments: Department[]) => of(new GetAllDepartmentsSuccess(departments))),
  );
  @Effect()
  getDirectionsFaculties$ = this.actions$.pipe(
    ofType<GetDirectionsDepartment>(EDepartmentsActions.GetDirectionsDepartment),
    map(action => action.payload.id),
    switchMap((id: number) => this.api.get("departments/" + id).pipe(map(response => response.data))),
    switchMap((directions: Direction[]) => of(new GetDirectionsDepartmentSuccess(directions))),
  );
  constructor(
    private api: ApiService,
    private actions$: Actions,
    private store: Store<IAppState>,
  ) {}
}
