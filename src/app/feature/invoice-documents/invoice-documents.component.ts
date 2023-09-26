import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-invoice-documents',
  templateUrl: './invoice-documents.component.html',
  styleUrls: ['./invoice-documents.component.css'],
})
export class InvoiceDocumentsComponent {
  constructor(private sharedService: SharedService) {
    sharedService.changeTitle('Фактури за продажба');
  }
}
