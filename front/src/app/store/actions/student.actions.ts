import { StudentsResponse } from "../../interfaces/students-response";

export interface ParamsGetStudents {
  id: number;
  sort?: string;
  page: number;
  filter?: string;
}

export enum EStudentActions {
  GetStudentsByDepartment = "[Student List] Get students by department",
  GetStudentsByDepartmentSuccess = "[Student List] Get students by department success",
}

export class GetStudentsByDepartment {
  public readonly type = EStudentActions.GetStudentsByDepartment;
  constructor(public payload: ParamsGetStudents) {}
}

export class GetStudentsByDepartmentSuccess {
  public readonly type = EStudentActions.GetStudentsByDepartmentSuccess;
  constructor(public payload: StudentsResponse) {}
}

export type StudentActions = GetStudentsByDepartment | GetStudentsByDepartmentSuccess;
