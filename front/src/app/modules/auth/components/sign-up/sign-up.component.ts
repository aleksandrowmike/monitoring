import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { first, tap } from "rxjs/operators";
import { setValidationErrors } from "../../../../helpers/form-helpers";
import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.sass"]
})
export class SignUpComponent implements OnInit {

  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}
  public signUp(): void {
    this.form.disable();
    this.authService.register(this.form.value).pipe(
      first(),
      tap(() => this.form.enable(), () => this.form.enable()),
    ).subscribe(
      () => this.router.navigateByUrl("/"),
      ((error: HttpErrorResponse) => setValidationErrors(this.form, error)),
    );
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
  }

}
