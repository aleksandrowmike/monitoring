import { HttpErrorResponse } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { first, map, tap } from "rxjs/operators";
import { setValidationErrors } from "../../helpers/form-helpers";
import { Department } from "../../models/department";
import { Direction } from "../../models/direction";
import { ApiService } from "../../services/api.service";
import { GetAllDepartments, GetDirectionsDepartment } from "../../store/actions/departments.actions";
import { selectDepartmentsList, selectDirectionsDepartmentList } from "../../store/selectors/deraptments.selectors";
import { IAppState } from "../../store/state/app.state";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-create-student",
  templateUrl: "./create-student.component.html",
  styleUrls: ["./create-student.component.sass"]
})
export class CreateStudentComponent implements OnInit {
  public form: FormGroup;
  public departments: Department[];
  public directionsInit: Direction[];
  public directions: Direction[];
  public degree_id: number;
  public options: string[] = ["one"];
  public degrees: object[] = [
    {
      id: 1,
      title: "Бакалавриат"
    },
    {
      id: 2,
      title: "Специалитет"
    },
    {
      id: 3,
      title: "Магистратура"
    },
  ];
  public showEducation: boolean;
  public showJobInform: boolean = true;
  public degreeInputDisable: boolean = true;
  public disabledJob: boolean = false;
  constructor(private fb: FormBuilder,
              private api: ApiService,
              public dialog: MatDialog,
              private router: Router,
              private store: Store<IAppState>,
              private ref: ChangeDetectorRef,
              ) {}

  public changeEducation(change: boolean): void {
    this.showEducation = change;
    if (!change) {
      this.form.get("plans.level").setValue(null);
      this.form.get("plans.university").setValue(null);
    }
  }
  public displayFn(data: Direction | Department | {title: string}): string {
    return data && data.title ? data.title : "";
  }
  public openDirection(): void {
    this.directions = this.directionsInit.filter(direction => direction.degree_id === this.degree_id);
  }
  public changeDepartment(department: Department): void {
    this.directionsInit = null;
    this.directions = null;
    this.degreeInputDisable = false;
    this.store.dispatch(new GetDirectionsDepartment({id: department.id}));
    this.store.pipe(select(selectDirectionsDepartmentList)).subscribe(directions => {
      this.directionsInit = directions;
    });
  }
  public changeDegree(data: {id: number, title: string}): void {
    this.form.get("direction_id").enable();
    this.degree_id = data.id;
    this.directions = this.directionsInit.filter(direction => direction.degree_id === data.id);
  }
  public openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "300px",
      data: {id: id}
    });
  }

  public changeJob(change: boolean): void {
    this.showJobInform = change;
    if (!change) {
      this.form.get("employment.company.title").setValue(null);
      this.form.get("employment.company.city").setValue(null);
      this.form.get("employment.position").setValue(null);
      this.form.get("employment.speciality").setValue(null);
    }
  }

  public saveStudent(): void {
    this.form.disable();
    this.disabledJob = true;
    const direction = this.form.get("direction_id").value;
    this.form.get("direction_id").setValue(direction.id);
    this.api.post("students", this.form.value).pipe(
      map(response => response.data),
      first(),
      tap(() => {
        this.form.enable();
        this.disabledJob = false;
      }, () => {
        this.form.enable();
        this.disabledJob = false;
      }),
    ).subscribe(
      (data) => this.openDialog(data.id),
      ((error: HttpErrorResponse) => {
        // setValidationErrors(this.form, error);
        console.log(error);
      }),
    );
  }
  public initForm(): void {
    const testData = {
      "name": "Иванов Иван Иванович",
      "email": "test@test.ru",
      "phone": "89024567654",
      "plans": {
        "job": true,
        "army": true,
        "business": true,
        "decree": true,
        "education": true,
        "other": "Я собираюсь ничего не делать",
        "level": 2,
        "university": "МГУ им Ломоносова"
      },
      "employment": {
        "company": {
          "title": "Netcraker",
          "city": "Нижний Новгород"
        },
        "position": "UX - инженер",
        "speciality": true
      },
      "specialty_activity": true,
      "year_graduate": "2020",
      "agreement": true,
      "direction_id": {id: "asfs"},
      "category_id": "1"
    };
    this.form = this.fb.group({
      name: null,
      email: [null, Validators.email],
      phone: null,
      specialty_activity: null,
      year_graduate: null,
      agreement: null,
      direction_id: null,
      category_id: null,
      plans: this.fb.group({
        job: null,
        army: null,
        business: null,
        decree: null,
        education: null,
        other: null,
        level: null,
        university: null
      }),
      employment: this.fb.group({
        company: this.fb.group({
          title: null,
          city: null
        }),
        position: null,
        speciality: null
      }),
    });
    this.form.get("direction_id").disable();
    this.form.setValue(testData);
  }

  ngOnInit(): void {
    this.initForm();
    this.store.dispatch(new GetAllDepartments());
    this.store
      .pipe(select(selectDepartmentsList))
      .subscribe((departments) => this.departments = departments);
    this.showEducation = this.form.get("plans.education").value;
  }

}
