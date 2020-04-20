import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DirectionsComponent } from "./components/directions/directions.component";
import { FacultiesComponent } from "./components/faculties/faculties.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from "./modules/auth/guards/auth.guard";
import { ModalComponent } from "./modules/modal/components/modal.component";
import { CreateStudentComponent } from "./modules/student/create/components/create-student.component";
import { StudentListComponent } from "./modules/student/list/components/student-list.component";
import { ModalStatisticComponent } from "./modules/student/modal-statistic/modal-statistic.component";
import { StatisticStudentComponent } from "./modules/student/statistic/components/statistic-student.component";

const studentsRoutes: Routes = [
  { path: "", component: StudentListComponent },
  { path: ":id", component: StudentListComponent },
  { path: "create", component: ModalComponent },
  { path: "update/:id", component: ModalComponent },
  { path: "delete/:id", component: ModalComponent },
];

const facultiesRouters: Routes = [
  { path: "", component: FacultiesComponent , data: { title: "Список факултетов" }},
  { path: "create", component: ModalComponent },
  { path: "update/:id", component: ModalComponent },
  { path: "delete/:id", component: ModalComponent },
];

const directionsRouters: Routes = [
  {path: "", component: DirectionsComponent },
  { path: "create", component: ModalComponent },
  { path: "update/:id", component: ModalComponent },
  { path: "delete/:id", component: ModalComponent },
];
const statisticRoute: Routes = [
  { path: ":id", component: ModalStatisticComponent },
];

const dashboardChildRoutes: Routes = [
  {path: "", redirectTo: "statistic", pathMatch: "full"},
  {path: "statistic", component: StatisticStudentComponent, children: statisticRoute},
];

const dashboardRoutes: Routes = [
  { path: "", children: dashboardChildRoutes},
  { path: "students", children: studentsRoutes},
  { path: "faculties", children: facultiesRouters },
  { path: "directions", children: directionsRouters},
];

const createRoute: Routes = [
  {path: "success", component: ModalComponent},
];
const routes: Routes = [
  { path: "",
    loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  { path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  // { path: "create", component: CreateStudentComponent, children: createRoute},
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
