import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AuthUser } from "../../../../store/actions/auth.actions";
import { IAppState } from "../../../../store/state/app.state";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit {
  public authForm: FormGroup;
  constructor(private fb: FormBuilder, private _store: Store<IAppState>, private router: Router) {}
  public initAuthFrom(): void {
    this.authForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      remember: [false]
    });
    this.authForm.setValue({email: "gor.mihal@gmail.com", password: "08069395", remember: false});
  }
  public isControlInvalid(controlName: string): boolean {
    const control = this.authForm.get(controlName);
    return control.invalid && control.touched;
  }
  public submitForm(): boolean {
    const controls = this.authForm.controls;
    if (this.authForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return false;
    }
    // console.log(this.authForm.value);
    this._store.dispatch(new AuthUser(this.authForm.value));
  }
  ngOnInit(): void {
    this.initAuthFrom();
  }
}
