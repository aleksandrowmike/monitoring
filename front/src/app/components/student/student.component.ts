import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IFaculties } from "../../models/faculties.interface";
import { IUser } from "../../models/user.interface";
import { GetAllFaculties } from "../../store/actions/faculties.actions";
import { selectFacultiesList } from "../../store/selectors/faculties.selectors";
import { IAppState } from "../../store/state/app.state";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.sass"]
})
export class StudentComponent implements OnInit {
  public user: IUser[] = [];
  public faculties: Observable<IFaculties[]>;
  constructor(private _store: Store<IAppState>) {}
  ngOnInit(): void {
    this._store.dispatch(new GetAllFaculties());
    this.faculties = this._store.pipe(select(selectFacultiesList));
  }
}
