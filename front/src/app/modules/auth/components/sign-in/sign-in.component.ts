import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { first, tap } from "rxjs/operators";
import { setValidationErrors } from "../../../../helpers/form-helpers";
import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.sass"]
})
export class SignInComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: "",
      password: "",
    });
  }

  public signIn(): void {
    this.form.disable();
    this.authService.signIn(this.form.value)
      .pipe(
        first(),
        tap(() => this.form.enable(), () => this.form.enable()),
      )
      .subscribe(
        () => this.router.navigateByUrl("/dashboard"),
        (error: HttpErrorResponse) => setValidationErrors(this.form, error),
      );
  }

}
