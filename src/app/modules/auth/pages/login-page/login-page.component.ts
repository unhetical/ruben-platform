import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { MessageService } from 'primeng-lts/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initDefaultForm();
  }

  initDefaultForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.displayMessage('error', 'Complete the form');
      return;
    }

    this.auth
      .login(this.form.value)
      .then((res) => {
        this.router.navigateByUrl('main/home');
        this.auth.setUser(res.user);
      })
      .catch((err) => this.displayMessage('error', err));
  }

  onLoginWithGoogle() {
    this.auth
      .loginWithGoogle()
      .then((res) => {
        this.router.navigateByUrl('main/home');
        this.auth.setUser(res.user);
      })
      .catch((err) => this.displayMessage('error', err));
  }

  /**
   * Show toast message
   * @param severity "success", "info", "warn" or "error".
   * @param summary string message.
   */
  displayMessage(severity: string, summary: string): void {
    this.messageService.add({
      severity,
      summary,
    });
  }
}
