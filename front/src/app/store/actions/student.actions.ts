import { Action } from "@ngrx/store";
import { IRecordBook } from "../../models/recordbook.interface";
import { IStudent } from "../../models/student.interface";

export enum EStudentActions {
  GetStudentsForDirections = "[Student List] Get students for directions",
  GetStudentsForDirectionsSuccess = "[Student List] Get students for directions success",
  GetStudent = "[Student] Get student",
  GetStudentSuccess = "[Student] Get student success",
  CreateStudent = "[Create/Edit Student] Create student",
  ResetCreateStudent = "[Create/Edit Student] Reset create student",
  CreateStudentsSuccess = "[Create/Edit Student] Create student success",
  UpdateStudent = "[Create/Edit Student] Update student",
  UpdateStudentSuccess = "[Create/Edit Student] Update student success",
  DeleteStudent = "[Student List] Delete student",
  DeleteStudentSuccess = "[Student List] Delete student success",
  UpdateRecordBook = "[Create/Edit Student record book]",
  UpdateRecordBookSuccess = "[Create/Edit Student record book success]",
  UpdateRecordBookError = "[Create/Edit Student record book error]",
  GetCountStudents = "[Student] Get count students",
  FilterStudent = "[Student List] Filter student",
  FilterStudentSuccess = "[Student List] Filter student success",
  FilterStudentDirections = "[Student List] Filter student directions",
  ResetDataStudents = "[Student] Reset data student"
}
export class FilterStudent implements Action {
  public readonly type = EStudentActions.FilterStudent;
  constructor(public payload: {filter: string}) {
  }
}
export class FilterStudentSuccess implements Action {
  public readonly type = EStudentActions.FilterStudentSuccess;
  constructor(public payload: {students: IStudent[]}) {
  }
}
export class FilterStudentDirections implements Action {
  public readonly type = EStudentActions.FilterStudentDirections;
  constructor(public payload: {directions: object[]}) {
  }
}
export class GetStudentsForDirections implements Action {
  public readonly type = EStudentActions.GetStudentsForDirections;
  constructor(public payload: {id: number}) {}
}
export class GetStudentsForDirectionsSuccess implements Action {
  public readonly type = EStudentActions.GetStudentsForDirectionsSuccess;
  constructor(public payload: IStudent[]) {}
}
export class GetStudent implements Action {
  public readonly type = EStudentActions.GetStudent;
  constructor(public payload: {id: number}) {}
}
export class GetStudentSuccess implements Action {
  public readonly type = EStudentActions.GetStudentSuccess;
  constructor(public payload: IStudent) {}
}
export class CreateStudent implements Action {
  public readonly type = EStudentActions.CreateStudent;
  constructor(public payload: {data: string}) {}
}
export class CreateStudentSuccess implements Action {
  public readonly type = EStudentActions.CreateStudentsSuccess;
  constructor(public payload: {id: number}) {}
}
export class UpdateStudent implements Action {
  public readonly type = EStudentActions.UpdateStudent;
  constructor(public payload: {_id: string, data: IStudent}) {}
}
export class UpdateStudentSuccess implements Action {
  public readonly type = EStudentActions.UpdateStudentSuccess;
  constructor(public payload: {_id: string, data: IStudent}) {}
}
export class DeleteStudent implements Action {
  public readonly type = EStudentActions.DeleteStudent;
  constructor(public payload: string) {}
}
export class DeleteStudentSuccess implements Action {
  public readonly type = EStudentActions.DeleteStudentSuccess;
  constructor(public payload: string) {}
}
export class UpdateRecordBook implements Action {
  public readonly type = EStudentActions.UpdateRecordBook;
  constructor(public payload: {_id: string, data: IRecordBook[]}) {}
}
export class UpdateRecordBookSuccess implements Action {
  public readonly type = EStudentActions.UpdateRecordBookSuccess;
  constructor(public payload: {_id: string, data: IRecordBook[]}) {}
}
export class UpdateRecordBookError implements Action {
  public readonly type = EStudentActions.UpdateRecordBookError;
}
export class ResetDataStudent implements Action {
  public readonly type = EStudentActions.ResetDataStudents;
}
export class ResetCreateStudent implements Action {
  public readonly type = EStudentActions.ResetCreateStudent;
}
export type StudentActions =
  GetStudentsForDirections | GetStudent | GetStudentsForDirectionsSuccess | GetStudentSuccess |
  CreateStudent | CreateStudentSuccess |
  DeleteStudent | DeleteStudentSuccess | UpdateStudent |
  UpdateStudentSuccess | UpdateRecordBook |
  UpdateRecordBookSuccess | UpdateRecordBookError | ResetDataStudent |
  FilterStudent | FilterStudentSuccess | FilterStudentDirections | ResetCreateStudent;
