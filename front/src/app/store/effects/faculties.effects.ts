import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { IDirections } from "../../models/directions.interface";
import { IFaculties } from "../../models/faculties.interface";
import { StudentsService } from "../../services/students.service";
import { EFacultiesActions, GetAllFaculties, GetAllFacultiesSuccess, GetDirectionsFaculties, GetDirectionsFacultiesSuccess } from "../actions/faculties.actions";
import { IAppState } from "../state/app.state";

@Injectable()
export class FacultiesEffects {
  @Effect()
  getAllFaculties$ = this._actions$.pipe(
    ofType<GetAllFaculties>(EFacultiesActions.GetAllFaculties),
    switchMap(() => this._studentsService.getAllFaculties()),
    switchMap((faculties: IFaculties[]) => of(new GetAllFacultiesSuccess(faculties))),
  );
  @Effect()
  getDirectionsFaculties$ = this._actions$.pipe(
    ofType<GetDirectionsFaculties>(EFacultiesActions.GetDirectionsFaculties),
    map(action => action.payload.facultiesId),
    switchMap((id: number) => this._studentsService.getDirectionsFaculties(id)),
    switchMap((directions: IDirections[]) => of(new GetDirectionsFacultiesSuccess(directions))),
  );
  constructor(
    private _studentsService: StudentsService,
    private _actions$: Actions,
    private _store: Store<IAppState>,
  ) {}
}
