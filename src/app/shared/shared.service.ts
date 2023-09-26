import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  titleChanged = new EventEmitter();
  constructor() {}

  changeTitle(title: string) {
    this.titleChanged.emit(title);
  }
}
