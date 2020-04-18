import { Action } from "@ngrx/store";
import { IFilter } from "../../models/filter.interface";

export enum EFilterActions {
  GetFilter = "[Filter] Get filter",
  GetFilterSuccess = "[Filter] Get filter success",
  ResetFilter = "[Filter] Reset filter"
}

export class GetFilter implements Action {
  public readonly type = EFilterActions.GetFilter;
  constructor(public payload: {idFaculties: number}) {}
}
export class GetFilterSuccess implements Action {
  public readonly type = EFilterActions.GetFilterSuccess;
  constructor(public payload: IFilter[]) {}
}
export class ResetFilter implements Action {
  public readonly type = EFilterActions.ResetFilter;
}
export type FilterActions = GetFilter | GetFilterSuccess | ResetFilter;
