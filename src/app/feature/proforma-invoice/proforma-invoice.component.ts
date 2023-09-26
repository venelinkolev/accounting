import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-proforma-invoice',
  templateUrl: './proforma-invoice.component.html',
  styleUrls: ['./proforma-invoice.component.css'],
})
export class ProformaInvoiceComponent {
  constructor(private sharedService: SharedService) {
    sharedService.changeTitle('Проформа фактури');
  }
}
