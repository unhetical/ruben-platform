import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { MessageService } from 'primeng-lts/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout().then(() => this.auth.removeUser());
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
