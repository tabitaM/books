import { Component } from '@angular/core';
import { EndpointService } from '../service/endpoint.service';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: IUser = null;
  constructor(private endpointService: EndpointService) {
    this.user = this.endpointService.getCachedUser();
  }
}
