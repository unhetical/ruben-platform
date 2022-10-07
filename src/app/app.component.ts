import { Observable } from 'rxjs';
import { AuthService } from '@modules/auth/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLogin$ = new Observable<boolean>();

  constructor(private auth: AuthService) {
    this.isLogin$ = this.auth.getToken();
  }
}
