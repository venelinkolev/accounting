import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './feature/document/document.component';
import { InvoiceDocumentsComponent } from './feature/invoice-documents/invoice-documents.component';
import { CustomerOrdersComponent } from './feature/customer-orders/customer-orders.component';
import { ProformaInvoiceComponent } from './feature/proforma-invoice/proforma-invoice.component';
import { HomeComponent } from './home-page/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // redirectTo: '/documents',
    redirectTo: '/home',
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },

  // {
  //   path: 'documents',
  //   title: 'Documents',
  //   component: DocumentComponent,
  // },
  // {
  //   path: 'invoice',
  //   title: 'Invoice',
  //   component: InvoiceDocumentsComponent,
  // },
  // {
  //   path: 'customer-orders',
  //   title: 'Customer Orders',
  //   component: CustomerOrdersComponent,
  // },
  // {
  //   path: 'proforma-invoice',
  //   title: 'Proforma Invoice',
  //   component: ProformaInvoiceComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
