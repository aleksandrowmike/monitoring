import { Action } from "@ngrx/store";
import { Department } from "../../models/department";
import { Direction } from "../../models/direction";
import { IDirections } from "../../models/directions.interface";

export enum EDepartmentsActions {
  GetAllDepartments = "[Faculties] Get all faculties",
  GetAllDepartmentsSuccess = "[Faculties] Get all faculties success",
  GetDirectionsDepartment = "[Faculties / Directions] Get directions for selected faculties",
  GetDirectionsDepartmentSuccess = "[Faculties / Directions] Get directions for selected faculties success",
  ResetDirectionsFaculties = "[Faculties / Directions] Reset directions"
}

export class GetAllDepartments implements Action {
  public readonly type = EDepartmentsActions.GetAllDepartments;
}
export class GetAllDepartmentsSuccess implements Action {
  public readonly type = EDepartmentsActions.GetAllDepartmentsSuccess;
  constructor(public payload: Department[]) {}
}
export class GetDirectionsDepartment implements Action {
  public readonly type = EDepartmentsActions.GetDirectionsDepartment;
  constructor(public payload: {id: number}) {}
}
export class GetDirectionsDepartmentSuccess implements Action {
  public readonly type = EDepartmentsActions.GetDirectionsDepartmentSuccess;
  constructor(public payload: Direction[]) {}
}
export class ResetDirectionsFaculties implements Action {
  public readonly type = EDepartmentsActions.ResetDirectionsFaculties;
}
export type DepartmentsActions = GetAllDepartments | GetAllDepartmentsSuccess |
  GetDirectionsDepartment | GetDirectionsDepartmentSuccess |
  ResetDirectionsFaculties;
