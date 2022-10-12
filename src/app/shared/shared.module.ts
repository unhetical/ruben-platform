// Modules
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { SkeletonTableComponent } from 'src/app/shared/components/skeleton-table/skeleton-table.component';
import { HeaderComponent } from './components/header/header.component';
import { TypeofPipe } from './pipes/typeof.pipe';
// Prime
import { ToolbarModule } from 'primeng-lts/toolbar';
import { SkeletonModule } from 'primeng-lts/skeleton';
import { TooltipModule } from 'primeng-lts/tooltip';
import { ButtonModule } from 'primeng-lts/button';
import { TableModule } from 'primeng-lts/table';

@NgModule({
  declarations: [HeaderComponent, SkeletonTableComponent, TypeofPipe],
  imports: [
    CommonModule,
    RouterModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    SkeletonModule,
    TableModule,
  ],
  exports: [HeaderComponent, SkeletonTableComponent, TypeofPipe],
})
export class SharedModule {}
