import { Component } from '@angular/core';
import { EndpointService } from '../service/endpoint.service';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  private user: IUser = null;
  private shortDate: Date;
  constructor(private endpointService: EndpointService) {
    this.endpointService.getUser().subscribe((user: IUser) => {
      console.log('User details: ', user);
      this.user = user;
      this.shortDate = this.user.return_date;
    });
  }
}
