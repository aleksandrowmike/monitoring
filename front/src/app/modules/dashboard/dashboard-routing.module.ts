import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {path: "", component: AdminComponent, children: [
      {
        path: "students/:id",
        loadChildren: () => import("../student/student.module").then(m => m.StudentModule)
      },
      { path: "", component: DashboardComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule {}
