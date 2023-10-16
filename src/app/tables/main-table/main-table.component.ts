import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from 'src/app/feature/document/document.component';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent implements AfterViewInit {
  @Input() dataSource!: MatTableDataSource<UserData>;
  @Input() totalNumberDocument!: number;
  @Input() totalDocumentType!: number;
  @Input() symbolValue!: string;
  // @Input() sort!: MatSort;

  @ViewChild(MatSort) sort!: MatSort;

  @Output() sortTable: EventEmitter<MatSort> = new EventEmitter();

  displayedColumns: string[] = [
    'position',
    'dateOfSave',
    'numberOfDocument',
    'documentType',
    // 'sumDocument',
    // 'case',
    // 'caseOwner',
    // 'nonCashPayment',
    // 'paymentMethod',
    // 'receiver',
    // 'nameOperator',
    // 'checked',
    // 'note',
  ];

  ngAfterViewInit(): void {
    this.sortTable.emit(this.sort);
  }
}
