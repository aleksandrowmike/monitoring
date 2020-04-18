import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IDirections } from "../../models/directions.interface";
import { IFaculties } from "../../models/faculties.interface";
import { IUser } from "../../models/user.interface";
import { UserLogOut } from "../../store/actions/auth.actions";
import { GetAllFaculties, GetDirectionsFaculties, ResetDirectionsFaculties } from "../../store/actions/faculties.actions";
import { GetFilter, ResetFilter } from "../../store/actions/filter.actions";
import { selectDirectionsFacultiesList, selectFacultiesList } from "../../store/selectors/faculties.selectors";
import { getMode } from "../../store/selectors/students.selectors";
import { IAppState } from "../../store/state/app.state";

@Component({
  selector: "side-bar",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.sass"]
})
export class SideBarComponent implements OnInit, OnChanges {
  public editMode: Observable<boolean> = this._store.pipe(select(getMode));
  public selectedDirections: number;
  public directions: Observable<IDirections[]>;
  public facultiesShow: boolean = false;
  public showContent: boolean = false;
  public facultiesInit: IFaculties[];
  @Input() user: IUser;
  @Input() faculties: IFaculties[];
  constructor(private _store: Store<IAppState>, private router: Router) { }
  public changeShow(): void {
    this.showContent = !this.showContent;
  }
  public facultiesToggle(): void {
    this.facultiesShow = !this.facultiesShow;
  }
  public dispatchDirections(id: number): void {
    this._store.dispatch(new GetDirectionsFaculties({facultiesId: id}));
    this._store.dispatch(new GetFilter({idFaculties: id}));
  }
  public logOut(): void {
    this._store.dispatch(new UserLogOut());
    this.router.navigate(["login"]);
  }
  public getDirectionFaculties(id: number): void {
    this.selectedDirections = this.selectedDirections === 1 ? this.selectedDirections = 0 : this.selectedDirections = 1;
    this._store.dispatch(new ResetDirectionsFaculties());
    if (this.selectedDirections) {
      this._store.dispatch(new GetDirectionsFaculties({facultiesId: id}));
      this.directions = this._store.pipe(select(selectDirectionsFacultiesList));
    }
  }
  public filtered(value: string): void {
    if (!value || value === "") {
      this.facultiesInit = this.faculties;
    }
    this.facultiesInit = this.facultiesInit.filter(fac => fac.name.toLowerCase().includes(value.toLowerCase()));
  }
  ngOnInit(): void {
    this.facultiesInit = this.faculties;
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
}
