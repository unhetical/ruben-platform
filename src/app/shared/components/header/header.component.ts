import { AuthService } from '@modules/auth/services/auth.service';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDark!: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getDefaultTheme();
  }

  getDefaultTheme() {
    this.isDark = localStorage.getItem('isDark') ? true : false;

    const body = document.getElementsByTagName('body')[0];
    if (this.isDark && !body.classList.contains('dark-theme')) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    }
  }

  switchTheme() {
    const body = document.getElementsByTagName('body')[0];

    if (this.isDark && body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.removeItem('isDark');
      this.isDark = false;
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('isDark', 'dark-theme');
      this.isDark = true;
    }
  }

  logout() {
    this.auth.logout();
  }
}
