import { AuthService } from '@modules/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.initDefaultForm();
  }

  initDefaultForm() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      console.error('Error: Review the form');
      return;
    }
    this.auth.login();
  }
}
