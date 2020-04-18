import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { GoogleChartsModule } from "angular-google-charts";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { NotSpecifiedPipe } from "../../pipes/not-specified.pipe";
import { ShortTitlePipe } from "../../pipes/short-title.pipe";
import { CardComponent } from "./card/card.component";
import { CreateStudentComponent } from "./create/components/create-student.component";
import { StudentFilterComponent } from "./filter/components/student-filter.component";
import { StudentFormComponent } from "./form/components/student-form.component";
import { StudentListComponent } from "./list/components/student-list.component";
import { ModalStatisticComponent } from "./modal-statistic/modal-statistic.component";
import { StatisticStudentComponent } from "./statistic/components/statistic-student.component";
import { TableComponent } from "./table/components/table.component";


@NgModule({
  declarations: [
    StudentListComponent,
    CreateStudentComponent,
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
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: "never"}),
  ],
  exports: [
    StudentListComponent,
    CreateStudentComponent,
    StatisticStudentComponent,
    StudentFormComponent,
    StudentFilterComponent,
    TableComponent,
  ]
})
export class StudentModule { }
