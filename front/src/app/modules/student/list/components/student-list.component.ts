import { animate, state, style, transition, trigger } from "@angular/animations";
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Student } from "../../../../models/student";
import { IStudent } from "../../../../models/student.interface";
import { GetStudentsForDirections } from "../../../../store/actions/student.actions";
import { getMode, selectStudentList } from "../../../../store/selectors/students.selectors";
import { IAppState } from "../../../../store/state/app.state";

@Component({
  selector: "app-student-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.sass"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({height: "0px", minHeight: "0"})),
      state("expanded", style({height: "*"})),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
    ]),
  ],
})
export class StudentListComponent implements OnInit {
  public displayedColumns: string[] =
    ["id", "name", "email", "phone", "specialty_activity", "year_graduate", "direction_id"];
  public dataSource: MatTableDataSource<Student>;
  public data: Student[];
  public expandedElement: Student | null;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private activatedRoute: ActivatedRoute,
              private store: Store<IAppState>) {
    this.store.dispatch(new GetStudentsForDirections({id: this.activatedRoute.snapshot.params.id}));
    this.store
      .pipe(select(selectStudentList))
      .subscribe(data => {
        this.data = data;
      });
  }

  ngOnInit(): void {
    console.log(this.data);
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }
}
