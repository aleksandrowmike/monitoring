import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { delay, filter } from "rxjs/operators";
import { IStudent } from "../../../../models/student.interface";
import { IPagination, PaginationService } from "../../../../services/pagination.service";
import { EditMode } from "../../../../store/actions/app.actions";
import { getMode } from "../../../../store/selectors/students.selectors";
import { IAppState } from "../../../../store/state/app.state";

enum Sort {
  ASC,
  DESC
}

@Component({
  selector: "app-table",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.sass"],
})

export class TableComponent implements OnInit, OnChanges {
  @Input() data: IStudent[];
  public obs$ = of(1).pipe(delay(500));
  public page: IPagination = {
    totalItems: 0,
    currentPage: 0,
    pageSize: 0,
    totalPages: 0,
    startPage: 0,
    endPage: 0,
    startIndex: 0,
    endIndex: 0,
    pages: [0]};
  public pageItems: IStudent[] = [];
  public mode: Observable<boolean> = this._store.pipe(select(getMode));
  public selectedStudents: string;
  private _numberOfClicks: number = 0;
  constructor(private _router: Router,
              private _store: Store<IAppState>,
              private _paginationService: PaginationService,
              private _ref: ChangeDetectorRef) {}
  public applySearch(search: string): void {
    search === "" ? this.selectedStudents = null :  this.selectedStudents = search;
  }
  public sort(sortField: string): void {
    switch (Sort[this._numberOfClicks]) {
      case ("ASC"): {
        this.pageItems.sort((a, b) => {
          if (a[sortField] < b[sortField]) {
            return -1;
          }
        });
        break;
      }
      case ("DESC"): {
        this.pageItems.sort((a, b) => {
          if (a[sortField] > b[sortField]) {
            return -1;
          }
        });
        break;
      }
      default: {
        break;
      }
    }
    this._numberOfClicks = this._numberOfClicks === 1 ? this._numberOfClicks = 0 : this._numberOfClicks = 1;
  }
  public navigateToStudent(id: number): void {
    this._router.navigate(["dashboard/detail", id]);
  }
  public changeMode(value: boolean): void {
    this._store.dispatch(new EditMode(value));
  }
  public setPage(page: number): void {
    this.page = this._paginationService.getPage(this.data.length, page);
    this.pageItems = this.data.slice(this.page.startIndex, this.page.endIndex + 1);
  }
  public setPageSize(pageSize: string): void {
    this._paginationService.setPageSize(+pageSize);
    this.setPage(this.page.currentPage);
  }
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue) {
      this.setPage(1);
    }
  }
}
