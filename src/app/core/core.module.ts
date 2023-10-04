import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from '../app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesModule } from '../tables/tables.module';
import { FiltersModule } from '../filters/filters.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SideBarComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    TablesModule,
    FiltersModule,
  ],
  exports: [HeaderComponent, FooterComponent, SideBarComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'bg-BG' }],
})
export class CoreModule {}
