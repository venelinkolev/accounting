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

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent implements OnInit, AfterViewInit {
  @ViewChild('card') card!: ElementRef;
  // @Output() clickCard = new EventEmitter();

  userList: IUser[] = [];
  currentList: IUser[] = [];
  numberUsers: number = 0;

  elementPerPage: number = 4;
  startIndex: number = 0;

  constructor(private userServices: JsonHolderService) {}

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

    // this.card.nativeElement.classList.add();
    // console.log(this.card);
  }

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
