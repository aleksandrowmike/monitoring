import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { GoogleChartsModule } from "angular-google-charts";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { NotSpecifiedPipe } from "../../pipes/not-specified.pipe";
import { ShortTitlePipe } from "../../pipes/short-title.pipe";
import { CardComponent } from "./card/card.component";
import { StudentFilterComponent } from "./filter/components/student-filter.component";
import { StudentFormComponent } from "./form/components/student-form.component";
import { StudentListComponent } from "./list/components/student-list.component";
import { ModalStatisticComponent } from "./modal-statistic/modal-statistic.component";
import { StatisticStudentComponent } from "./statistic/components/statistic-student.component";
import { StudentRoutingModule } from "./student-routing.module";
import { TableComponent } from "./table/components/table.component";


@NgModule({
  declarations: [
    StudentListComponent,
    StatisticStudentComponent,
    StudentFormComponent,
    StudentFilterComponent,
    TableComponent,
    ShortTitlePipe,
    NotSpecifiedPipe,
    CardComponent,
    ModalStatisticComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AutocompleteLibModule,
    GoogleChartsModule.forRoot(),
    StudentRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: "never"}),

    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    StudentListComponent,
    StatisticStudentComponent,
    StudentFormComponent,
    StudentFilterComponent,
    TableComponent,
  ]
})
export class StudentModule { }
