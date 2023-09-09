import { AfterViewInit, Component, OnInit } from '@angular/core';
import { JsonHolderService } from 'src/app/services/json-holder.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  startIndex: number = 0;
  numberOfDocOnPage: number = 4;
  numberDocuments!: number;

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
