import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import * as queryString from "query-string";
import { merge, Observable, of } from "rxjs";
import { catchError, map, startWith, switchMap } from "rxjs/operators";
import { HttpError } from "../../../../interfaces/error";
import { StudentsResponse } from "../../../../interfaces/students-response";
import { Student } from "../../../../models/student";
import { ApiService } from "../../../../services/api.service";
import { GetStudentsByDepartment, ParamsGetStudents } from "../../../../store/actions/student.actions";
import { selectStudentList } from "../../../../store/selectors/students.selectors";
import { IAppState } from "../../../../store/state/app.state";

@Component({
  selector: "app-student-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.sass"],
})
export class StudentListComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] =
    ["id",
      "name",
      "email",
      "title",
      "job",
      "army",
      "business",
      "decree",
      "education",
      "other",
      "level",
      "university",
      "company",
      "position",
      "city",
    ];
  public displayedColumnsPlan: string [] = ["job", "army", "business", "decree", "education", "other"];
  public displayedColumnsEmployment: string [] = ["company", "position", "city"];
  public displayedColumnsEducation: string [] = ["level", "university"];
  public russianNameColumn: object = {
    job: "Работа",
    other: "Другое",
    army: "Армия",
    business: "Бизнесс",
    decree: "Декрет",
    education: "Обучение",
    level: "Уровень образования",
    university: "Университет",
    company: "Компания",
    position: "Должность",
    city: "Город",
  };

  public data: Student[] = [];
  public resultsLength = 0;
  public isLoadingResults = true;
  public isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<IAppState>,
              private api: ApiService,
              private ref: ChangeDetectorRef) {
  }
  public getStudents$(id: number, page: number, sort: string = "", filter: string = ""): Observable<StudentsResponse> {
    return this.api.get("students/department/" + id + "/?filter=" + filter + "&sort=" + sort + "&page=" + page);
  }
  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            this.isLoadingResults = true;
            this.ref.detectChanges();
            return this.getStudents$(params.id, this.paginator.pageIndex + 1);
          }),
          map(response => {
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = response.meta.total;
            console.log(response);
            return response.data;
          }),
          catchError(() => {
            this.isLoadingResults = false;
            this.isRateLimitReached = true;
            return of([]);
          }),
        ).subscribe(data => {
          // console.log(data);
          this.data = data;
          this.ref.detectChanges();
        });
    });
  }

  ngOnInit(): void {
  }
}
