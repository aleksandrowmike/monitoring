import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, SubscriptionLike } from "rxjs";
import { Action } from "../../../../interfaces/actions.emun";
import { IDirections } from "../../../../models/directions.interface";
import { IFaculties } from "../../../../models/faculties.interface";
import { IStudent } from "../../../../models/student.interface";
import { CreateStudent } from "../../../../store/actions/student.actions";
import { selectDirectionsFacultiesList, selectFacultiesList } from "../../../../store/selectors/deraptments.selectors";
import { IAppState } from "../../../../store/state/app.state";
@Component({
  selector: "student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.sass"]
})
export class StudentFormComponent implements OnInit, OnDestroy {
  @Input() updateData: IStudent;
  public createForm: FormGroup;
  public isUpdate: boolean;
  public isEmployed: boolean;
  public isOther: boolean;
  public education: boolean;
  public faculties: IFaculties[];
  public directions: IDirections[];
  public filteredDirections: IDirections[];
  public subscriptions: SubscriptionLike[] = [];
  constructor(private fb: FormBuilder, private _store: Store<IAppState>, private _activatedRoute: ActivatedRoute) {
    // this._store.dispatch(new GetAllFaculties());
  }
  public initCreateForm(): void {
    this.createForm = this.fb.group({
      name: this.fb.group({
        firstName: [null, [Validators.required]],
        lastName: ["", [Validators.required]],
        patronymic: ["", [Validators.required]]
      }, {validators: Validators.required}),
      contacts: this.fb.group({
        email: ["", [Validators.required]],
        phone: ["", [Validators.required]],
      }, {validators: Validators.required}),
      education: this.fb.group({
        faculty: [null, [Validators.required]],
        direction: [null, [Validators.required]],
        level: [null]
      }, {validators: Validators.required}),
      isEmployed: [null, [Validators.required]],
      placeOfWork: this.fb.group({
        organization: [""],
        position: [""],
        organizationCity: [""]
      }),
      activity: [null],
      isLikeWork: [null, [Validators.required]],
      agreement: [null, [Validators.required]],
      plans: this.fb.group({
        education: [],
        work: [],
        decree: [],
        army: [],
        business: [],
        other: [],
        otherText: []
      }),
      continuingEducation: this.fb.group({
        university: [null],
        level: [null],
      })
    });
  }
  public submitCreateForm(): boolean {
    const controls = this.createForm.controls;
    if (this.createForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return false;
    }
    console.log(this.createForm.value);
    this._store.dispatch(new CreateStudent({data: JSON.stringify(this.createForm.value)}));
  }
  public isControlInvalid(controlName: string): boolean {
    const control = this.createForm.get(controlName);
    return control.invalid && control.touched;
  }
  public isEmployedClick(): void {
    if (this.createForm.get("isEmployed").value === "true") {
      this.isEmployed = true;
      return;
    }
    this.isEmployed = false;
  }
  public changeEducation(): void {
    this.education = this.createForm.get("plans.education").value;
  }
  public changeOther(): void {
    this.isOther = this.createForm.get("plans.other").value;
  }
  public changeFaculty(): void {
    if (this.createForm.get("education.faculty").value !== null) {
      // this._store.dispatch(new GetDirectionsFaculties({facultiesId: this.createForm.get("education.faculty").value}));
      this.subscriptions.push(
        this._store.pipe(select(selectDirectionsFacultiesList)).subscribe(list => this.directions = list));
    }
  }
  public changeLevel(): void {
    if (this.createForm.get("education.level").value !== null) {
      this.filteredDirections = this.directions.filter(direction => direction.tranings_id === +this.createForm.get("education.level").value);
    }
  }
  ngOnInit(): void {
    // this.subscriptions.push(this._store.pipe(select(selectFacultiesList)).subscribe(list => this.faculties = list));
    this.initCreateForm();
    switch (this._activatedRoute.snapshot.url[0].path) {
      case Action.update: {
        this.isUpdate = true;
        console.log(this.updateData);
        const data = {
          name: {
            firstName: this.updateData.student.name.split(" ")[0],
            lastName: this.updateData.student.name.split(" ")[1],
            patronymic: this.updateData.student.name.split(" ")[2],
          },
          contacts: {
            email: this.updateData.student.email,
            phone: this.updateData.student.phone
          }
        };
        this.createForm.patchValue(data);
        break;
      }
      default: {
      }
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
