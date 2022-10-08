import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from '@modules/auth/services/auth.service';
import { Component } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

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
