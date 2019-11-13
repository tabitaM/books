import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { IBooks } from '../interfaces/IBooks';
import { ICategories } from '../interfaces/ICategories';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/user`);
  }

  getBooks(): Observable<IBooks[]> {
    return this.http.get<IBooks[]>(`${this.baseUrl}/books`);
  }

  getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(`${this.baseUrl}/categories`);
  }
}
