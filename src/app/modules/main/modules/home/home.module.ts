import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
// Prime
import { ButtonModule } from 'primeng-lts/button';
import { TooltipModule } from 'primeng-lts/tooltip';
import { MessageService } from 'primeng-lts/api';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, ButtonModule, TooltipModule, SharedModule],
  providers: [MessageService],
})
export class HomeModule {}
