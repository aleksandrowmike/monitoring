import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { SubscriptionLike } from "rxjs";
import { IFaculties } from "../../../models/faculties.interface";
import { IStatistic } from "../../../models/statistic.interface";
import { GetStatisticFaculty, ResetStatisticFaculty } from "../../../store/actions/statistic.actions";
import { selectStatisticFaculty } from "../../../store/selectors/statistic.selectors";
import { IAppState } from "../../../store/state/app.state";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./card.component.sass"]
})
export class CardComponent implements OnInit, OnDestroy {
  public showContent: boolean = false;
  public listStatistic: IStatistic;
  public subscriptions: SubscriptionLike[] = [];
  @Input() faculty: IFaculties;
  constructor(private _store: Store<IAppState>, private ref: ChangeDetectorRef, private _route: Router) {}
  public showedContent(): void {
    if (!this.listStatistic) {
      this._store.dispatch(new GetStatisticFaculty({id: this.faculty.id}));
    }
    this.subscriptions.push(this._store.pipe(select(selectStatisticFaculty)).subscribe(list => {
      this.listStatistic = list.find(value => value.faculty.id === this.faculty.id);
      this.ref.markForCheck();
    }));
    this.showContent = !this.showContent;
  }
  public navigateToSelect(id: number): void {
    this._route.navigate(["statistic", id]);
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }
}
