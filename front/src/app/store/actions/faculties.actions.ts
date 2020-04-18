import { Action } from "@ngrx/store";
import { IDirections } from "../../models/directions.interface";
import { IFaculties } from "../../models/faculties.interface";

export enum EFacultiesActions {
  GetAllFaculties = "[Faculties] Get all faculties",
  GetAllFacultiesSuccess = "[Faculties] Get all faculties success",
  GetDirectionsFaculties = "[Faculties / Directions] Get directions for selected faculties",
  GetDirectionsFacultiesSuccess = "[Faculties / Directions] Get directions for selected faculties success",
  ResetDirectionsFaculties = "[Faculties / Directions] Reset directions"
}

export class GetAllFaculties implements Action {
  public readonly type = EFacultiesActions.GetAllFaculties;
}
export class GetAllFacultiesSuccess implements Action {
  public readonly type = EFacultiesActions.GetAllFacultiesSuccess;
  constructor(public payload: IFaculties[]) {}
}
export class GetDirectionsFaculties implements Action {
  public readonly type = EFacultiesActions.GetDirectionsFaculties;
  constructor(public payload: {facultiesId: number}) {}
}
export class GetDirectionsFacultiesSuccess implements Action {
  public readonly type = EFacultiesActions.GetDirectionsFacultiesSuccess;
  constructor(public payload: IDirections[]) {}
}
export class ResetDirectionsFaculties implements Action {
  public readonly type = EFacultiesActions.ResetDirectionsFaculties;
}
export type FacultiesActions = GetAllFaculties | GetAllFacultiesSuccess |
  GetDirectionsFaculties | GetDirectionsFacultiesSuccess |
  ResetDirectionsFaculties;
