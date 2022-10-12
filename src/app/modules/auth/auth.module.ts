import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ButtonModule } from 'primeng-lts/button';
import { MessageService } from 'primeng-lts/api';
import { ToastModule } from 'primeng-lts/toast';
import { RegisterComponent } from './pages/register-page/register.component';

@NgModule({
  declarations: [LoginPageComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
})
export class AuthModule {}
