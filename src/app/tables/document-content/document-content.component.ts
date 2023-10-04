import { Component, Input } from '@angular/core';
import { Data } from 'src/app/core/footer/footer.component';


@Component({
  selector: 'app-document-content',
  templateUrl: './document-content.component.html',
  styleUrls: ['./document-content.component.css'],
})
export class DocumentContentComponent {
  @Input() dataSource!: Data[];

  displayedColumns: string[] = [
    'position',
    'barcode',
    'nameItems',
    'quantity',
    'price',
    'sum',
    'quantityStorage',
  ];
}
