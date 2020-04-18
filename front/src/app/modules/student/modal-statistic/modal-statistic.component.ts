import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { SubscriptionLike } from "rxjs";
import { IChart } from "../../../interfaces/chart.interface";
import { IStatistic } from "../../../models/statistic.interface";
import { GetSelectedStatisticFaculty, GetStatisticFaculty, ResetStatisticFaculty } from "../../../store/actions/statistic.actions";
import { selectStatisticFacultySelected } from "../../../store/selectors/statistic.selectors";
import { IAppState } from "../../../store/state/app.state";

// ColumnChart PieChart

@Component({
  selector: "app-modal-statistic",
  templateUrl: "./modal-statistic.component.html",
  styleUrls: ["./modal-statistic.component.sass"]
})
export class ModalStatisticComponent implements OnInit, OnDestroy {
  public listStatistic: IStatistic;
  public subscriptions: SubscriptionLike[] = [];
  public chartPlansStudent: IChart;
  public chartEmployedStudent: IChart;
  constructor(private _location: Location, private _store: Store<IAppState>,
              private _activatedRoute: ActivatedRoute) { }
  public goBack(): void {
    this._location.back();
  }
  public initChartPlansStudent(): void {
    this.chartPlansStudent = {
      chartType: "ColumnChart",
      dataTable: [
        ["",
          "Трудоустроены",
          "Не занятые (в поиске работы)",
          "Планирующие продолжить обучение (в магистратуре, аспирантуре)",
          "Служба в ВС",
          "Свой бизнес",
          "Декрет",
        ],
        ["",
          this.listStatistic.directions[0].all.employed.percent,
          this.listStatistic.directions[0].all.job.percent,
          this.listStatistic.directions[0].all.counting_education.percent,
          this.listStatistic.directions[0].all.army.percent,
          this.listStatistic.directions[0].all.business.percent,
          this.listStatistic.directions[0].all.decree.percent],
      ],
      options: {
        "title": "Мониторинг трудоустройства и планов выпускников \n" + this.listStatistic.faculty.name,
        legend: { position: "bottom" },
        vAxis: { format: "percent"}
      },
      containerId: "chart"
      };
  }
  public initChartEmployedStudent(): void {
    this.chartEmployedStudent = {
      chartType: "PieChart",
      dataTable: [
        ["Task", "Hours per Day"],
        ["Трудоустроены по специальности", this.listStatistic.directions[0].all.employed_activity.percent],
        ["Трудоустроены не по специальности", this.listStatistic.directions[0].all.employed_no_activity.percent],
      ],
      options: {
        title: "Соотношение работающих выпускников \n" + this.listStatistic.faculty.name,
      },
      };
  }
  ngOnInit(): void {
    this._store.dispatch(new GetSelectedStatisticFaculty({id: +this._activatedRoute.snapshot.params.id}));
    this.subscriptions.push(this._store.pipe(select(selectStatisticFacultySelected)).subscribe(list => this.listStatistic = list));
    console.log(this.listStatistic);
    this.initChartPlansStudent();
    this.initChartEmployedStudent();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe());
    this.subscriptions = [];
    this._store.dispatch(new ResetStatisticFaculty());
    this._store.dispatch(new GetStatisticFaculty({id: this.listStatistic.faculty.id}));
  }
}
