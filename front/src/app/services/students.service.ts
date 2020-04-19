import { HttpClient, HttpEventType, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { IDirections } from "../models/directions.interface";
import { IFaculties } from "../models/faculties.interface";
import { IFilter } from "../models/filter.interface";
import { IRecordBook } from "../models/recordbook.interface";
import { IStatistic } from "../models/statistic.interface";
import { IStudent } from "../models/student.interface";
import { selectTokenAuth } from "../store/selectors/auth.selectors";
import { IAppState } from "../store/state/app.state";
import { IAuthState } from "../store/state/auth.state";
import { NotificationService } from "./notification.service";

export interface IFile {
  filename: string;
}
@Injectable({
  providedIn: "root"
})
export class StudentsService {
  public apiUri: string  = environment.apiUrl;
  private token: string;
  constructor(private notificationService: NotificationService, private http: HttpClient, private _store: Store<IAppState>) {
    this._store.pipe(select(selectTokenAuth)).subscribe(token => this.token = token);
  }
  public onUpload(fd: FormData): Observable<IFile> {
    return this.http.post<IFile>(this.apiUri + "upload", fd);
  }
  public updateRecordBook(_id: string, data: IRecordBook[]): Observable<IRecordBook[]> {
    return this.http.put<IRecordBook[]>(this.apiUri + _id + "/record", data);
  }
  public createStudent(data: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(this.apiUri, data);
  }
  public updateStudent(_id: string, data: IStudent ): Observable<IStudent> {
    return this.http.put<IStudent>(this.apiUri + _id, data).pipe(
      tap(() => this.notificationService.add({type: "success", message: "Student successfully updated"})),
      catchError(this.notificationService.handleError<IStudent>("Error")),
    );
  }
  public deleteStudent(_id: string): Observable<string> {
    return this.http.delete<string>(this.apiUri + _id);
  }

  /*New http response*/
  public filterByCriteria(data: string): Observable<IStudent[]> {
    return this.http.post<IStudent[]>(this.apiUri + "filter/criteria", data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      })
    }).pipe(
      catchError(this.notificationService.handleError<IStudent[]>("Error")),
    );
  }
  public getStatisticByFaculty(id: number): Observable<IStatistic> {
    return this.http.get<IStatistic>(this.apiUri + "stat/" + id, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
      })
    }).pipe(
      catchError(this.notificationService.handleError<IStatistic>("Error")),
    );
  }
  public create(data: string): Observable<object> {
    return this.http.post<object>(this.apiUri + "student/create/json", data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }).pipe(
      catchError(this.notificationService.handleError<object>("Error")),
    );
  }
  public getAllFaculties(): Observable<IFaculties[]> {
    return this.http.get<IFaculties[]>(this.apiUri + "facultiesAll").pipe(
      catchError(this.notificationService.handleError<IFaculties[]>("Error")),
    );
  }
  public getDirectionsFaculties(id: number): Observable<IDirections[]> {
    return this.http.get<IDirections[]>(this.apiUri + `faculties/${id}/directions`, {headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })}).pipe(
      catchError(this.notificationService.handleError<IDirections[]>("Error")),
    );
  }
  public getStudentsForDirections(id: number): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.apiUri + `search/f/${id}`, {headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })}).pipe (
      catchError(this.notificationService.handleError<IStudent[]>("Error")),
    );
  }
  public getFilterByFaculties(id: number): Observable<IFilter[]> {
    return this.http.get<IFilter[]>(this.apiUri + `filter/f/${id}`, {headers: new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
      })}).pipe (
      catchError(this.notificationService.handleError<IFilter[]>("Error")),
    );
  }
}
