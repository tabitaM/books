import { Component } from '@angular/core';
import { EndpointService } from '../service/endpoint.service';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private endpointService: EndpointService) {}
}
