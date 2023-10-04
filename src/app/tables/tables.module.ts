import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentContentComponent } from './document-content/document-content.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DocumentContentComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
  ],
  exports: [DocumentContentComponent],
})
export class TablesModule {}
