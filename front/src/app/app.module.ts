import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AuthInterceptor } from "./auth.interceptor";
import { CreateStudentComponent } from "./components/create-student/create-student.component";
import { DirectionsComponent } from "./components/directions/directions.component";
import { FacultiesComponent } from "./components/faculties/faculties.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { StudentComponent } from "./components/student/student.component";
import { StudentsRootComponent } from "./components/students-root/students-root.component";
import { AuthModule } from "./modules/auth/auth.module";
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
import { DialogComponent } from './components/dialog/dialog.component';

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
    CreateStudentComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,

    StoreModule.forRoot(appReducers, {metaReducers}),
    EffectsModule.forRoot([
      StudentEffects,
      AuthEffects,
      DepartmentsEffects,
      FilterEffects,
      StatisticEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    AuthModule,
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
