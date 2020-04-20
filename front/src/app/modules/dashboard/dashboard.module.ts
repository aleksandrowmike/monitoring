import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    AdminComponent,
  ],
  providers: [
    AuthService,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
  ]
})
export class DashboardModule { }
