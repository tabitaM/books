import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { IBooks } from '../interfaces/IBooks';
import { ICategories } from '../interfaces/ICategories';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  
  user: IUser = null;
  books: IBooks[] = null;
  categories: ICategories[] = null;
  shortDate: Date;
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.getUser();
    this.initializeBooks();
    this.getCategories();
  }

  getUser(): Subscription {
    return this.http
      .get<IUser>(`${this.baseUrl}/user`)
      .subscribe((user: IUser) => {
        this.user = user;
        this.shortDate = this.user.return_date;
      });
  }

  initializeBooks(){
    this.http
      .get<IBooks[]>(`${this.baseUrl}/books`)
      .subscribe((books: IBooks[]) => {
        console.log('Books: ', books);
        this.books = books;
      });
  }

  async getAsyncData() {
    await this.http.get<IBooks[]>(`${this.baseUrl}/books`).toPromise();
    console.log("I will wait");
  }

  getBooks() {
    return new Observable<IBooks[]>(observer => {
      observer.next(this.books)
    })
  }

  getCategories(): Subscription {
    return this.http
      .get<ICategories[]>(`${this.baseUrl}/categories`)
      .subscribe((categories: ICategories[]) => {
        console.log('Categories: ', categories);
        this.categories = categories;
      });
  }
}
