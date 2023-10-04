import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersBoxComponent } from './filters-box.component';

describe('FiltersBoxComponent', () => {
  let component: FiltersBoxComponent;
  let fixture: ComponentFixture<FiltersBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersBoxComponent]
    });
    fixture = TestBed.createComponent(FiltersBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
