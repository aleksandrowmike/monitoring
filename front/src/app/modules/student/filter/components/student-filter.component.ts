import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { SubscriptionLike } from "rxjs";
import { IDirections } from "../../../../models/directions.interface";
// import { FilterStudent, GetStudentsForDirections } from "../../../../store/actions/student.actions";
import { selectDirectionsFacultiesList } from "../../../../store/selectors/deraptments.selectors";
import { slectFilterList } from "../../../../store/selectors/filter.selectors";
import { IAppState } from "../../../../store/state/app.state";

@Component({
  selector: "student-filter",
  templateUrl: "./student-filter.component.html",
  styleUrls: ["./student-filter.component.sass"]
})
export class StudentFilterComponent implements OnInit, OnDestroy {
  public filterForm: FormGroup;
  // options: string[] = ['One', 'Two', 'Three'];
  public keyword: string = "name";
  public searchDirectionsPlaceholder: string = "Направления";
  public filterCompanyNamePlaceholder: string = "Место работы";
  public filterCompanyPositionPlaceholder: string = "Должность";
  public companyName: object[] = [];
  public companyNameSelected: object[] = [];
  public companyCity: string[] = [];
  public companyPosition: object[] = [];
  public directions: IDirections[];
  public selectedDirections: IDirections[] = [];
  public subscriptions: SubscriptionLike[] = [];
  constructor(private fb: FormBuilder, private _store: Store<IAppState>, private _ActivatedRoute: ActivatedRoute) { }

  public initFilterForm(): void {
    this.filterForm = this.fb.group({
      directions: [""],
      year: [null],
      category: [null],
      planLearn: [null],
      planFuture: [null],
      workSpec: [null],
      employ: [null],
      company: [""],
      position: [""],
      companyCity: [null],
      lineOfBusiness: [null],
      info: [null]
    });
  }
  public submitFilterForm(): boolean {
    const controls = this.filterForm.controls;
    if (this.filterForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return false;
    }
    const data = {
      ...this.filterForm.value,
      faculty: this._ActivatedRoute.snapshot.params
    };
    // this._store.dispatch(new FilterStudent({filter: JSON.stringify(data)}));
  }
  public resetFilter(): void {
    // this._store.dispatch(new GetStudentsForDirections({id: this._ActivatedRoute.snapshot.params.id}));
  }
  public selectEvent(item: IDirections): void {}
  public selectCompanyName(item: object): void {}
  public deleteTagCompany(name: string): void {
    this.companyNameSelected = this.companyNameSelected.filter(selected => selected["name"] !== name);
  }
  public deleteTagDirections(name: string): void {
    const findDirections = this.selectedDirections.find(f => f.name === name);
    this.directions.unshift(findDirections);
    this.selectedDirections = this.selectedDirections.filter(selected => selected.name !== name);
  }
  public unique<T>(array: T[], field: string): T[] {
    return array.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[field]).indexOf(obj[field]) === pos;
    });
  }
  ngOnInit(): void {
    this.initFilterForm();
    // this.subscriptions.push(this._store.pipe(select(selectDirectionsFacultiesList)).subscribe(sub => this.directions = sub));
    this.subscriptions.push(this._store.pipe(select(slectFilterList)).subscribe(filterList => {
      this.companyName = [];
      this.companyPosition = [];
      filterList.forEach((value)  => {
        this.companyName.push({name: value.companyName});
        this.companyPosition.push({name: value.position});
      });
    }));
    this.companyName =  this.unique<object>(this.companyName, "name");
    this.companyPosition =  this.unique<object>(this.companyPosition, "name");
    this.companyPosition = this.companyPosition.filter(v => v["name"] !== null);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
