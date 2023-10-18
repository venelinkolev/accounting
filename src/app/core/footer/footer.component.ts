import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { JsonHolderService } from 'src/app/services/json-holder.service';

export interface Data {
  position: number;
  barcode: number;
  nameItems: string;
  quantity: number;
  price: number;
  sum: number;
  quantityStorage: number;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  startIndex: number = 0;
  numberOfDocOnPage: number = 4;
  numberDocuments!: number;

  dataSource: Data[] = [
    {
      position: 1,
      barcode: 12353,
      nameItems: 'Компютър',
      quantity: 2,
      price: 250,
      sum: 500,
      quantityStorage: 2,
    },
    {
      position: 2,
      barcode: 12353,
      nameItems: 'Компютър',
      quantity: 2,
      price: 250,
      sum: 500,
      quantityStorage: 2,
    },
    {
      position: 3,
      barcode: 12353,
      nameItems: 'Компютър',
      quantity: 2,
      price: 250,
      sum: 500,
      quantityStorage: 2,
    },
    {
      position: 4,
      barcode: 12353,
      nameItems: 'Компютър',
      quantity: 2,
      price: 250,
      sum: 500,
      quantityStorage: 2,
    },
    {
      position: 5,
      barcode: 12353,
      nameItems: 'Компютър',
      quantity: 2,
      price: 250,
      sum: 500,
      quantityStorage: 2,
    },
    {
      position: 6,
      barcode: 12353,
      nameItems: 'Компютър',
      quantity: 2,
      price: 250,
      sum: 500,
      quantityStorage: 2,
    },
  ];

  displayedColumns: string[] = [
    'position',
    'barcode',
    'nameItems',
    'quantity',
    'price',
    'sum',
    'quantityStorage',
  ];

  pieChartDataPayment: ChartData<'pie', number[], string | string[]> = {
    labels: ['Каса', 'Банка', 'Карта'],
    datasets: [
      {
        data: [300.5, 500.6, 100.8],
      },
    ],
  };

  pieChartDataDocumentType: ChartData<'pie', number[], string | string[]> = {
    labels: ['Разписка', 'Фактура', 'Стокова разписка'],
    datasets: [
      {
        data: [150, 50, 35],
      },
    ],
  };

  // pieChartLabelsPayment = ['Каса', 'Банка', 'Карта'];
  // pieChartDatasetsPayment = [300.5, 500.6, 100.8];

  // pieChartLabelsDocumentType = ['Разписка', 'Фактура', 'Стокова разписка'];
  // pieChartDatasetsDocumentType = [150, 50, 35];

  constructor(private userServices: JsonHolderService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.userServices.numberUsers$.subscribe(
      (number) => (this.numberDocuments = number)
    );
  }

  nextBtn(): void {
    this.startIndex += this.numberOfDocOnPage;
    // console.log(this.startIndex);
    this.userServices.currentIndex(this.startIndex);
  }

  previousBtn(): void {
    this.startIndex -= this.numberOfDocOnPage;
    this.userServices.currentIndex(this.startIndex);
    // console.log(this.startIndex);
  }
}
