import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { IFaculties } from "../../models/faculties.interface";
import { selectFacultiesList } from "../../store/selectors/deraptments.selectors";
import { IAppState } from "../../store/state/app.state";

@Component({
  selector: "app-faculties",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./faculties.component.html",
  styleUrls: ["./faculties.component.sass"]
})
export class FacultiesComponent implements OnInit {
  public facultiesList: IFaculties[];
  constructor(private _store: Store<IAppState>) { }

  ngOnInit(): void {
    // this._store.pipe(select(selectFacultiesList)).subscribe(faculties => this.facultiesList = faculties);
  }

}
