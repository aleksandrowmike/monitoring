import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Department } from "../../../../models/department";
import { IDirections } from "../../../../models/directions.interface";
import { IFaculties } from "../../../../models/faculties.interface";
import { IUser } from "../../../../models/user.interface";
import { ApiService } from "../../../../services/api.service";
import { GetAllDepartments, GetDirectionsFaculties, ResetDirectionsFaculties } from "../../../../store/actions/departments.actions";
import { GetFilter } from "../../../../store/actions/filter.actions";
import { selectDepartmentsList, selectDirectionsFacultiesList } from "../../../../store/selectors/deraptments.selectors";
import { getMode } from "../../../../store/selectors/students.selectors";
import { IAppState } from "../../../../store/state/app.state";
import { AuthService } from "../../../auth/services/auth.service";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.sass"]
})
export class SideBarComponent implements OnInit {
  public editMode: Observable<boolean> = this.store.pipe(select(getMode));
  public selectedDirections: number;
  public directions: Observable<IDirections[]>;
  public facultyShow: boolean = false;
  public showContent: boolean = false;
  public departmentsInit: Department[];
  public departments: Department[];
  @Input() user: {name: string, email: string};
  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private authService: AuthService,
    ) { }
  public changeShow(): void {
    this.showContent = !this.showContent;
  }
  public facultiesToggle(): void {
    this.facultyShow = !this.facultyShow;
  }
  public dispatchDirections(id: number): void {
    this.store.dispatch(new GetDirectionsFaculties({facultiesId: id}));
    this.store.dispatch(new GetFilter({idFaculties: id}));
  }
  public signOut(): void {
    this.authService.signOut();
    this.router.navigateByUrl("auth");
  }
  public getDirectionFaculties(id: number): void {
    this.selectedDirections = this.selectedDirections === 1 ? this.selectedDirections = 0 : this.selectedDirections = 1;
    this.store.dispatch(new ResetDirectionsFaculties());
    if (this.selectedDirections) {
      this.store.dispatch(new GetDirectionsFaculties({facultiesId: id}));
      this.directions = this.store.pipe(select(selectDirectionsFacultiesList));
    }
  }
  public filtered(value: string): void {
    if (!value || value === "") {
      this.departmentsInit = this.departments;
    }
    this.departmentsInit = this.departmentsInit.filter(fac => fac.title.toLowerCase().includes(value.toLowerCase()));
  }
  ngOnInit(): void {
    this.store.pipe(select(selectDepartmentsList)).subscribe(response => {
      this.departmentsInit = response;
    });
    this.store.dispatch(new GetAllDepartments);
  }
}
