import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {
  loginForm: FormGroup

  @Output() loginEvent = new EventEmitter();

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) { return }

    this.loginEvent.emit({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }
}
