import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDark!: boolean;
  @HostBinding('class') componentCssClass: any;

  constructor(public overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    this.getDefaultTheme();
  }

  getDefaultTheme() {
    this.isDark = localStorage.getItem('isDark') ? true : false;

    const body = document.getElementsByTagName('body')[0];
    if (this.isDark && !body.classList.contains('dark-theme')) {
      body.classList.add('dark-theme');
    }
  }

  switchTheme() {
    const body = document.getElementsByTagName('body')[0];

    if (this.isDark && body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      localStorage.removeItem('isDark');
      this.isDark = false;
    } else {
      body.classList.add('dark-theme');
      localStorage.setItem('isDark', 'dark-theme');
      this.isDark = true;
    }
  }
}
