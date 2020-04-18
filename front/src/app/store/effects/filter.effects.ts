import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { IFilter } from "../../models/filter.interface";
import { StudentsService } from "../../services/students.service";
import { EFilterActions, GetFilter, GetFilterSuccess } from "../actions/filter.actions";
import { IAppState } from "../state/app.state";

@Injectable()
export class FilterEffects {
  @Effect()
  getFilterByFaculties$ = this._actions$.pipe(
    ofType<GetFilter>(EFilterActions.GetFilter),
    map(action => action.payload.idFaculties),
    switchMap((id: number) => this._studentsService.getFilterByFaculties(id)),
    switchMap((filter: IFilter[]) => of(new GetFilterSuccess(filter))),
  );
  constructor(
    private _studentsService: StudentsService,
    private _actions$: Actions,
    private _store: Store<IAppState>,
  ) {}
}
