import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/services/json-holder.service';

@Component({
  selector: 'app-document-mobile',
  templateUrl: './document-mobile.component.html',
  styleUrls: ['./document-mobile.component.css'],
})
export class DocumentMobileComponent {
  @Input() user!: IUser;

  closeContent(event: any): void {
    const cardElement = event.target.closest('.card');

    cardElement.children[3].classList.remove('content-mobile');

    cardElement.children[3].classList.add('content-mobile-none');
  }

  openContent(event: any): void {
    const cardElement = event.target.closest('.card');

    cardElement.children[3].classList.remove('content-mobile-none');

    cardElement.children[3].classList.add('content-mobile');
  }
}
