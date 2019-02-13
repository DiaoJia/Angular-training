import { MatchPasswordValidation } from "./../../shared/validations/match-password.validation";
import { CreateUserCommand } from "./../../command/create-user.command";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-dynamic-forms",
  templateUrl: "./dynamic-forms.component.html",
  styleUrls: ["./dynamic-forms.component.scss"]
})
export class DynamicFormsComponent implements OnInit {

  public createUserFormGroup: FormGroup;
  public createUserCommand:CreateUserCommand = new CreateUserCommand();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildFormValidators();
  }

  onSubmit() {
    if (this.createUserFormGroup.invalid) return;

  }

  buildFormValidators() {
    this.createUserFormGroup = this._formBuilder.group({
      fullName: ["", [Validators.required]],
      username: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      confirmPassword: [
        "",
        [Validators.required, MatchPasswordValidation.MatchPassword]
      ],
      telephoneNumber: [""]
    });
  }

  get fullName() {
    return this.createUserFormGroup.controls['fullName'];
  }

  get username() {
    return this.createUserFormGroup.controls['username'];
  }

  get password() {
    return this.createUserFormGroup.controls['password'];
  }

  get confirmPassword() {
    return this.createUserFormGroup.controls['confirmPassword'];
  }
}
