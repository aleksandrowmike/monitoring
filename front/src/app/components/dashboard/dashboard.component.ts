import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IFaculties } from "../../models/faculties.interface";
import { IUser } from "../../models/user.interface";
import { GetAllFaculties } from "../../store/actions/faculties.actions";
import { selectFacultiesList } from "../../store/selectors/faculties.selectors";
import { IAppState } from "../../store/state/app.state";

@Component({
  selector: "app-dashboard",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"]
})
export class DashboardComponent implements OnInit {
  public user: IUser[] = [];
  public faculties: Observable<IFaculties[]>;

  constructor(private _store: Store<IAppState>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._store.dispatch(new GetAllFaculties());
    this.faculties = this._store.pipe(select(selectFacultiesList));
  }
}
