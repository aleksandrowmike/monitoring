import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentListComponent } from "./list/components/student-list.component";

const routes: Routes = [
  { path: "", component: StudentListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class StudentRoutingModule {}
