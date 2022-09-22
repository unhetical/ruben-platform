import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TypeofPipe } from './pipes/typeof.pipe';

@NgModule({
  declarations: [HeaderComponent, TypeofPipe],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, TypeofPipe],
})
export class SharedModule {}
