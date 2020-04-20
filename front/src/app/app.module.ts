import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AuthInterceptor } from "./auth.interceptor";
import { DirectionsComponent } from "./components/directions/directions.component";
import { FacultiesComponent } from "./components/faculties/faculties.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { StudentComponent } from "./components/student/student.component";
import { StudentsRootComponent } from "./components/students-root/students-root.component";
import { AuthModule } from "./modules/auth/auth.module";
import { ModalModule } from "./modules/modal/modal.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { StudentModule } from "./modules/student/student.module";
import { DeletePrefixPipe } from "./pipes/delete-prefix.pipe";
import { TextLabelModePipe } from "./pipes/text-label-mode.pipe";
import { TextResultPipe } from "./pipes/text-resut.pipe";
import { ApiService } from "./services/api.service";
import { TokenStorageService } from "./services/token-storage.service";
import { AuthEffects } from "./store/effects/auth.effects";
import { DepartmentsEffects } from "./store/effects/departments.effects";
import { FilterEffects } from "./store/effects/filter.effects";
import { StatisticEffects } from "./store/effects/statistic.effects";
import { StudentEffects } from "./store/effects/student.effects";
import { appReducers, metaReducers } from "./store/reducers/app.reducers";

@NgModule({
  declarations: [
    NotFoundComponent,
    TextResultPipe,
    TextLabelModePipe,
    DeletePrefixPipe,
    StudentComponent,
    StudentsRootComponent,
    FacultiesComponent,
    DirectionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers, {metaReducers}),
    EffectsModule.forRoot([
      StudentEffects,
      AuthEffects,
      DepartmentsEffects,
      FilterEffects,
      StatisticEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    RouterModule,
    StudentModule,
    ModalModule,
    MatIconModule,
    NotificationsModule,
    ReactiveFormsModule,
    AuthModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    ApiService,
    TokenStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [StudentsRootComponent]
})
export class AppModule {}
