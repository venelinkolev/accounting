import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { JsonHolderService } from 'src/app/services/json-holder.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges {
  referenceName: string = '';
  currentDate: Date = new Date();

  dateRange = new FormGroup({
    startDate: new FormControl(this.currentDate, [Validators.required]),
    endDate: new FormControl(this.currentDate, [Validators.required]),
  });

  constructor(
    private userServices: JsonHolderService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.titleChanged.subscribe(
      (title) => (this.referenceName = title)
    );
  }

  ngAfterViewInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  search(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    // console.log(typeof value);
    this.userServices.currentSearchSymbol(value);
  }

  startDate(date: any): void {
    console.log(date.value.toLocaleDateString());
  }

  endDate(date: any): void {
    if (date.value != null) {
      console.log(date.value.toLocaleDateString());
    }
  }
}
