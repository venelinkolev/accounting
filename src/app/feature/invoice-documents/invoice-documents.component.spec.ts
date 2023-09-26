import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDocumentsComponent } from './invoice-documents.component';

describe('InvoiceDocumentsComponent', () => {
  let component: InvoiceDocumentsComponent;
  let fixture: ComponentFixture<InvoiceDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceDocumentsComponent]
    });
    fixture = TestBed.createComponent(InvoiceDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
