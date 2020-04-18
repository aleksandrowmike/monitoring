import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { IFaculties } from "../../../../models/faculties.interface";
import { selectFacultiesList } from "../../../../store/selectors/faculties.selectors";
import { IAppState } from "../../../../store/state/app.state";

@Component({
  selector: "app-statistic-student",
  templateUrl: "./statistic-student.component.html",
  styleUrls: ["./statistic-student.component.sass"]
})
export class StatisticStudentComponent implements OnInit {

  public faculties: IFaculties[];

  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
    this._store.pipe(select(selectFacultiesList)).subscribe(list => this.faculties = list);
  }

}
