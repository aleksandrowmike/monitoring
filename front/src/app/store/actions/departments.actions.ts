import { Action } from "@ngrx/store";
import { Department } from "../../models/department";
import { IDirections } from "../../models/directions.interface";

export enum EDepartmentsActions {
  GetAllDepartments = "[Faculties] Get all faculties",
  GetAllDepartmentsSuccess = "[Faculties] Get all faculties success",
  GetDirectionsFaculties = "[Faculties / Directions] Get directions for selected faculties",
  GetDirectionsFacultiesSuccess = "[Faculties / Directions] Get directions for selected faculties success",
  ResetDirectionsFaculties = "[Faculties / Directions] Reset directions"
}

export class GetAllDepartments implements Action {
  public readonly type = EDepartmentsActions.GetAllDepartments;
}
export class GetAllDepartmentsSuccess implements Action {
  public readonly type = EDepartmentsActions.GetAllDepartmentsSuccess;
  constructor(public payload: Department[]) {}
}
export class GetDirectionsFaculties implements Action {
  public readonly type = EDepartmentsActions.GetDirectionsFaculties;
  constructor(public payload: {facultiesId: number}) {}
}
export class GetDirectionsFacultiesSuccess implements Action {
  public readonly type = EDepartmentsActions.GetDirectionsFacultiesSuccess;
  constructor(public payload: IDirections[]) {}
}
export class ResetDirectionsFaculties implements Action {
  public readonly type = EDepartmentsActions.ResetDirectionsFaculties;
}
export type DepartmentsActions = GetAllDepartments | GetAllDepartmentsSuccess |
  GetDirectionsFaculties | GetDirectionsFacultiesSuccess |
  ResetDirectionsFaculties;
