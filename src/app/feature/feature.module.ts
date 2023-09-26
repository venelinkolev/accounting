import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { InvoiceDocumentsComponent } from './invoice-documents/invoice-documents.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { ProformaInvoiceComponent } from './proforma-invoice/proforma-invoice.component';

@NgModule({
  declarations: [
    DocumentComponent,
    InvoiceDocumentsComponent,
    CustomerOrdersComponent,
    ProformaInvoiceComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [DocumentComponent],
})
export class FeatureModule {}
