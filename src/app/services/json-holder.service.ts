import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: object;
}

@Injectable({
  providedIn: 'root',
})
export class JsonHolderService {
  private _user = new Subject<IUser[]>();
  private _search = new Subject<string>();
  private _pagenation = new BehaviorSubject<number>(0);

  pagenation$: Observable<number> = this._pagenation.asObservable();

  searchSymbol$: Observable<string> = this._search.asObservable();

  user$: Observable<IUser[]> = this._user.asObservable();
  numberUsers$: Observable<number> = this.user$.pipe(
    map((users) => {
      return users ? users.length : 0;
    })
  );

  constructor(private http: HttpClient) {}

  getPost$(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  userHolder(user: IUser[]): void {
    this._user.next(user);
  }

  currentIndex(index: number): void {
    this._pagenation.next(index);
  }

  currentSearchSymbol(symbol: string): void {
    this._search.next(symbol);
  }
}
