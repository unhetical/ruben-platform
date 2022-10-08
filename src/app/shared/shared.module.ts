import { TooltipModule } from 'primeng-lts/tooltip';
import { ButtonModule } from 'primeng-lts/button';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TypeofPipe } from './pipes/typeof.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Prime
import { ToolbarModule } from 'primeng-lts/toolbar';

@NgModule({
  declarations: [HeaderComponent, TypeofPipe],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ToolbarModule, ButtonModule, TooltipModule],
  exports: [HeaderComponent, TypeofPipe, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
