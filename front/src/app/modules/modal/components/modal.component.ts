import { Location } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { SubscriptionLike } from "rxjs";
import { Action } from "../../../interfaces/actions.emun";
import { IStudent } from "../../../models/student.interface";
import { GetStudent, ResetCreateStudent } from "../../../store/actions/student.actions";
import { getCreateIdStudent, selectSelectedStudent } from "../../../store/selectors/students.selectors";
import { IAppState } from "../../../store/state/app.state";


@Component({
  selector: "modal",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.sass"]
})

export class ModalComponent implements OnInit, OnDestroy {
  public id: number;
  public createSuccess: boolean = false;
  public updateStudents: boolean;
  public updateValue: IStudent;
  public subscriptions: SubscriptionLike[] = [];
  constructor(private _location: Location,
              private _activatedRoute: ActivatedRoute,
              private _store: Store<IAppState>) {
  }
  public goBack(): void {
    this._location.back();
  }
  ngOnInit(): void {
   switch (this._activatedRoute.snapshot.url[0].path) {
     case Action.success: {
       this.createSuccess = true;
       this.subscriptions.push(this._store.pipe(select(getCreateIdStudent)).subscribe(id => {
         if (id === undefined) {
           this.goBack();
         }
         this.id = id;
       }));
       break;
     }
     case Action.update: {
       this.updateStudents = true;
       const id: number = Number(this._activatedRoute.snapshot.url[1].path);
       this._store.dispatch(new GetStudent({id: id}));
       this.subscriptions.push(this._store.pipe(select(selectSelectedStudent)).subscribe(value => this.updateValue = value));
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
    this._store.dispatch(new ResetCreateStudent());
  }
}
