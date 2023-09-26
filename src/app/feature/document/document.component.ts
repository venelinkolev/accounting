import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IUser, JsonHolderService } from 'src/app/services/json-holder.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SharedService } from 'src/app/shared/shared.service';

export interface UserData {
  position: string;
  dateOfSave: string;
  numberOfDocument: string;
  documentType: string;
}

const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent implements OnInit, AfterViewInit {
  @ViewChild('card') card!: ElementRef;

  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<UserData>;

  userList: IUser[] = [];
  currentList: IUser[] = [];
  numberUsers: number = 0;

  totalDocumentType: number = 0;
  totalNumberDocument: number = 0;

  elementPerPage: number = 4;
  startIndex: number = 0;

  symbolValue: string = '';

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
  displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement!: UserData | null;

  constructor(
    private userServices: JsonHolderService,
    private sharedService: SharedService
  ) {
    sharedService.changeTitle('Документи за продажба');

    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit(): void {
    this.totalDocumentType = this.dataSource.data
      .map((p) => Number(p.documentType))
      .reduce((acc, value) => acc + value, 0);

    this.totalNumberDocument = this.dataSource.data.length;

    this.userServices.getPost$().subscribe((list) => {
      this.userList = list;
      this.userServices.userHolder(list);

      this.currentList = this.userList.slice(
        this.startIndex,
        this.startIndex + this.elementPerPage
      );
    });
  }

  ngAfterViewInit(): void {
    this.userServices.pagenation$.subscribe((index) => {
      this.startIndex = index;

      this.currentList = this.userList.slice(
        this.startIndex,
        this.startIndex + this.elementPerPage
      );
    });
    this.dataSource.sort = this.sort;

    this.userServices.searchSymbol$.subscribe((symbol) => {
      this.symbolValue = symbol;
      this.dataSource.filter = symbol.trim().toLowerCase();
      this.userServices.totalDocumentSum(this.dataSource.filteredData);
    });

    this.totalNumberDocument = this.dataSource.filteredData.length;

    this.userServices.totalDoc$.subscribe((sum) => {
      this.totalDocumentType = sum[0];
      this.totalNumberDocument = sum[1];
    });
  }

  closeContent(event: any): void {
    const targetElement: Element = event.target;

    if (targetElement.nodeName === 'path') {
      targetElement.parentElement?.parentElement?.parentElement?.classList.add(
        'content-mobile-none'
      );
      targetElement.parentElement?.parentElement?.parentElement?.classList.remove(
        'content-mobile'
      );
    } else if (targetElement.nodeName === 'svg') {
      targetElement.parentElement?.parentElement?.classList.add(
        'content-mobile-none'
      );
      targetElement.parentElement?.parentElement?.classList.remove(
        'content-mobile'
      );
    }
  }

  openContent(event: any): void {
    event.target.offsetParent.children[3].classList.remove(
      'content-mobile-none'
    );
    event.target.offsetParent.children[3].classList.add('content-mobile');
  }
}

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    position: id.toString(),
    dateOfSave: name,
    documentType: Math.round(Math.random() * 100).toString(),
    numberOfDocument: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
