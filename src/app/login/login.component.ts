import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../service/endpoint.service';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUser = null;
  constructor(private endpointService: EndpointService) {}

  ngOnInit() {
    this.endpointService.getUser().subscribe((user: IUser) => {
      console.log('User details: ', user);
      this.user = user;
    });
    return this.user;
  }
}
