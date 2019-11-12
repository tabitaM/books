import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/user`);
  }
}
