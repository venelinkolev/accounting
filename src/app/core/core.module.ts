import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SideBarComponent],
  imports: [CommonModule, MatTableModule, MatSortModule],
  exports: [HeaderComponent, FooterComponent, SideBarComponent],
})
export class CoreModule {}
