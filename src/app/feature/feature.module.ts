import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [DocumentComponent],
  imports: [CommonModule, MatTableModule],
  exports: [DocumentComponent],
})
export class FeatureModule {}
