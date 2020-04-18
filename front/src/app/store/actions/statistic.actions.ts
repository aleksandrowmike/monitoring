import { Action } from "@ngrx/store";
import { IStatistic, IStatisticCount } from "../../models/statistic.interface";

export enum EStatisticActions {
  GetStatisticFaculty = "[Statistic] Get statistic faculty",
  GetStatisticFacultySuccess = "[Statistic] Get statistic faculty success",
  GetSelectedStatisticFaculty = "[Statistic] Get statistic faculty selected",
  GetSelectedStatisticFacultySuccess = "[Statistic] Get statistic faculty selected success",
  ResetStatisticFaculty = "[Statistic] Reset statistic faculty selected success",
}
export class GetStatisticFaculty implements Action {
  public readonly type = EStatisticActions.GetStatisticFaculty;
  constructor(public payload: {id: number}) {}
}
export class GetSelectedStatisticFaculty implements Action {
  public readonly type = EStatisticActions.GetSelectedStatisticFaculty;
  constructor(public payload: {id: number}) {}
}
export class GetStatisticFacultySuccess  implements Action {
  public readonly type = EStatisticActions.GetStatisticFacultySuccess;
  constructor(public payload: {statistic: IStatistic}) {}
}
export class GetSelectedStatisticFacultySuccess  implements Action {
  public readonly type = EStatisticActions.GetSelectedStatisticFacultySuccess;
  constructor(public payload: {statistic: IStatistic}) {}
}
export class ResetStatisticFaculty  implements Action {
  public readonly type = EStatisticActions.ResetStatisticFaculty;
}
export type StatisticActions = GetStatisticFaculty |
  GetStatisticFacultySuccess | GetSelectedStatisticFaculty |
  GetSelectedStatisticFacultySuccess | ResetStatisticFaculty;
