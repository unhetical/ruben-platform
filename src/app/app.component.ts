import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from '@modules/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLogged$ = new Observable<boolean>();

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.isLogged$ = this.auth.logged$;
  }
}
