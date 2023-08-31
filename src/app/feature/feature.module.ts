import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [DocumentComponent],
  imports: [CommonModule],
  exports: [DocumentComponent],
})
export class FeatureModule {}
