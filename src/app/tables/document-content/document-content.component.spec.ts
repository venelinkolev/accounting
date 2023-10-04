import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentContentComponent } from './document-content.component';

describe('DocumentContentComponent', () => {
  let component: DocumentContentComponent;
  let fixture: ComponentFixture<DocumentContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentContentComponent]
    });
    fixture = TestBed.createComponent(DocumentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
