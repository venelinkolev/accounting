import {
  ElementRef,
  EventEmitter,
  Inject,
  Output,
  ViewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  // standalone: true,
})
export class DocumentComponent implements OnInit, AfterViewInit {
  @ViewChild('card') card!: ElementRef;

  @ViewChild(MatSort) sort!: MatSort;
  // @Output() clickCard = new EventEmitter();
  dataSource: MatTableDataSource<UserData>;

  userList: IUser[] = [];
  currentList: IUser[] = [];
  numberUsers: number = 0;

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

  constructor(private userServices: JsonHolderService) {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    this.dataSource = new MatTableDataSource(users);
    // console.log(users);
  }

  ngOnInit(): void {
    this.userServices.getPost$().subscribe((list) => {
      this.userList = list;
      this.userServices.userHolder(list);

      this.currentList = this.userList.slice(
        this.startIndex,
        this.startIndex + this.elementPerPage
      );
      // this.userList = list.slice(
      //   this.startIndex,
      //   this.startIndex + this.elementPerPage
      // );
      // console.log(this.userList);
    });
  }

  ngAfterViewInit(): void {
    this.userServices.pagenation$.subscribe((index) => {
      this.startIndex = index;

      // console.log('1', this.startIndex);

      this.currentList = this.userList.slice(
        this.startIndex,
        this.startIndex + this.elementPerPage
      );

      // console.log('2', this.currentList);
    });
    this.dataSource.sort = this.sort;

    this.userServices.searchSymbol$.subscribe((symbol) => {
      console.log(symbol);
      this.symbolValue = symbol;
      this.dataSource.filter = symbol.trim().toLowerCase();
    });
    // this.card.nativeElement.classList.add();
    // console.log(this.card);
  }

  // applyFilter(event: Event): void {
  //   console.log((event.target as HTMLInputElement).value);
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  closeContent(event: any): void {
    const targetElement: Element = event.target;
    // console.log(targetElement);
    // console.log(event.target.parentElement.offsetParent.classList);

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
    // console.log(event);
    // console.log(this.card);
    // this.card.nativeElement.childNodes[3].classList.add('redClass');
    event.target.offsetParent.children[3].classList.remove(
      'content-mobile-none'
    );
    event.target.offsetParent.children[3].classList.add('content-mobile');
  }
  // isView: boolean = false;
  // table: HTMLElement | null;
  // constructor(@Inject(DOCUMENT) document: Document) {
  //   this.table = document.getElementById('main-table');
  // }
  // tableBody!: HTMLElement | null;
  // row: NodeListOf<HTMLTableRowElement> | undefined;
  // showContent(event: Event) {
  //   const element = event;
  //   console.log(element);
  // }
  // ngAfterViewInit(): void {
  //   this.tableBody = document.getElementById('main-table-body');
  //   // console.log(this.tableBody);
  //   this.row = this.tableBody?.querySelectorAll('tr');
  //   // console.log(this.row);
  //   this.row?.forEach((element) => {
  //     element.addEventListener('click', this.showContent);
  //     // console.log(element);
  //   });
  // }
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
