import { AfterViewInit, Component } from '@angular/core';
import { JsonHolderService } from 'src/app/services/json-holder.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  constructor(private userServices: JsonHolderService) {}

  ngAfterViewInit(): void {}

  search(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    // console.log(typeof value);
    this.userServices.currentSearchSymbol(value);
  }
}
