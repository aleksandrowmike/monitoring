import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { IRecordBook } from "../../models/recordbook.interface";
import { Student } from "../../models/student";
import { IStudent } from "../../models/student.interface";
import { ApiService } from "../../services/api.service";
import { StudentsService } from "../../services/students.service";
import {
  CreateStudent,
  CreateStudentSuccess,
  DeleteStudent,
  DeleteStudentSuccess,
  EStudentActions, FilterStudent, FilterStudentSuccess, GetStudent,
  GetStudentsForDirections, GetStudentsForDirectionsSuccess, GetStudentSuccess,
  UpdateRecordBook, UpdateRecordBookSuccess,
  UpdateStudent,
  UpdateStudentSuccess,
} from "../actions/student.actions";
import { selectStudentList } from "../selectors/students.selectors";
import { IAppState } from "../state/app.state";

@Injectable()
export class StudentEffects {
  // @Effect()
  // getStudent$ = this._actions$.pipe(
  //   ofType<GetStudent>(EStudentActions.GetStudent),
  //   map(action => action.payload.id),
  //   withLatestFrom(this._store.pipe(select(selectStudentList))),
  //   switchMap(([id, students]) => {
  //     // const selectedStudent = students.filter(student => student.student.id === id)[0];
  //     // return of(new GetStudentSuccess(selectedStudent));
  //   }),
  //   );
  @Effect()
  getStudents$ = this._actions$.pipe(
    ofType<GetStudentsForDirections>(EStudentActions.GetStudentsForDirections),
    map(action => action.payload.id),
    switchMap((id: number) => this.api.get("students/department/" + id)
      .pipe(map(response => response.data))),
    switchMap((students: Student[]) => {
      return of(new GetStudentsForDirectionsSuccess(students));
    }),
  );
  @Effect()
  createStudent$ = this._actions$.pipe(
    ofType<CreateStudent>(EStudentActions.CreateStudent),
    map(action => action.payload.data),
    switchMap((data: string) => this._studentsService.create(data).pipe(
      switchMap((value: {id: number}) => of(new CreateStudentSuccess({id: value.id}))),
      tap(() => this._router.navigate(["/create/success"])),
    )),
  );
  @Effect()
  deleteStudent$ = this._actions$.pipe(
    ofType<DeleteStudent>(EStudentActions.DeleteStudent),
    map(action => action.payload),
    switchMap((id: string) => this._studentsService.deleteStudent(id).pipe(
        switchMap(() => of(new DeleteStudentSuccess(id))),
    )),
  );
  @Effect()
  updateStudent$ = this._actions$.pipe(
    ofType<UpdateStudent>(EStudentActions.UpdateStudent),
    map(action => action.payload),
    switchMap((action: {_id: string, data: IStudent}) => this._studentsService.updateStudent(action._id, action.data).pipe(
      switchMap(() => of(new UpdateStudentSuccess(action))),
    )),
  );
  @Effect()
  updateRecordBook$ = this._actions$.pipe(
    ofType<UpdateRecordBook>(EStudentActions.UpdateRecordBook),
    map(action => action.payload),
    switchMap((action: {_id: string, data: IRecordBook[]}) => this._studentsService.updateRecordBook(action._id, action.data).pipe(
      switchMap(() => of(new UpdateRecordBookSuccess(action))),
    )),
  );
  @Effect()
  filterStudentList$ = this._actions$.pipe(
    ofType<FilterStudent>(EStudentActions.FilterStudent),
    map(action => action.payload.filter),
    switchMap(action => this._studentsService.filterByCriteria(action).pipe(
      switchMap((students: IStudent[]) => of(new FilterStudentSuccess({students: students})))),
    ),
  );
  constructor(
    private _studentsService: StudentsService,
    private _actions$: Actions,
    private api: ApiService,
    private _store: Store<IAppState>,
    private _router: Router) {}
}
