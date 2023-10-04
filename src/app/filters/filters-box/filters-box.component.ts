import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-filters-box',
  templateUrl: './filters-box.component.html',
  styleUrls: ['./filters-box.component.css'],
})
export class FiltersBoxComponent {
  @Output() isOpenFiltersBoxChange = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2) {}

  closeFiltersBox(): void {
    // console.log('Close Filters Box');
    this.isOpenFiltersBoxChange.emit(false);
  }
}
