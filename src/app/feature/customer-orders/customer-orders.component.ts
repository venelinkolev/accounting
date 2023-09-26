import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css'],
})
export class CustomerOrdersComponent {
  constructor(private sharedService: SharedService) {
    sharedService.changeTitle('Поръчки от клиенти');
  }
}
