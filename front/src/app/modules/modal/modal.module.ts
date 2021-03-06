import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StudentModule } from "../student/student.module";
import { ModalComponent } from "./components/modal.component";


@NgModule({
  declarations: [
    ModalComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        StudentModule,
    ],
  exports: [
    ModalComponent,
  ]
})
export class ModalModule { }
