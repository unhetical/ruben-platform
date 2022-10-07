import { AuthService } from '@modules/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  login() {
   this.auth.login();
  }
}
