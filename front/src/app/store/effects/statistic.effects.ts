import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, switchMap, withLatestFrom } from "rxjs/operators";
import { IStatistic } from "../../models/statistic.interface";
import { StudentsService } from "../../services/students.service";
import { EStatisticActions, GetSelectedStatisticFaculty, GetSelectedStatisticFacultySuccess, GetStatisticFaculty, GetStatisticFacultySuccess } from "../actions/statistic.actions";
import { selectStatisticFaculty } from "../selectors/statistic.selectors";
import { IAppState } from "../state/app.state";

@Injectable()
export class StatisticEffects {
  @Effect()
  getStatisticByFaculty$ = this._actions$.pipe(
    ofType<GetStatisticFaculty>(EStatisticActions.GetStatisticFaculty),
    map(action => action.payload.id),
    switchMap((id: number) => this._studentsService.getStatisticByFaculty(id)),
    switchMap((statistic: IStatistic) => of(new GetStatisticFacultySuccess({statistic: statistic}))),
  );
  @Effect()
  getStatisticByFacultySelected$ = this._actions$.pipe(
    ofType<GetSelectedStatisticFaculty>(EStatisticActions.GetSelectedStatisticFaculty),
    map(action => action.payload.id),
    withLatestFrom(this._store.pipe(select(selectStatisticFaculty))),
    switchMap(([id, statistic]) => {
      let selectedStatistic = null;
      statistic.forEach(value => {
        selectedStatistic = value;
        selectedStatistic.directions = value.directions.filter(dir => dir.direction.id === id);
      });
      return of(new GetSelectedStatisticFacultySuccess({statistic: selectedStatistic}));
    }),

  );
  constructor(
    private _studentsService: StudentsService,
    private _actions$: Actions,
    private _store: Store<IAppState>,
  ) {}
}
