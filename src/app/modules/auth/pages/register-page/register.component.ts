import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { MessageService } from 'primeng-lts/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private auth: AuthService,
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
      .register(this.form.value)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
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
