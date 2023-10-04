import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersBoxComponent } from './filters-box/filters-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [FiltersBoxComponent],
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatInputModule],
  exports: [FiltersBoxComponent],
})
export class FiltersModule {}
