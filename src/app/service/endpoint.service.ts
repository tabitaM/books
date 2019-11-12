import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  userUrl = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {}

  getUser(): Observable<Object> {
    return this.http.get(this.userUrl);
  }
}
