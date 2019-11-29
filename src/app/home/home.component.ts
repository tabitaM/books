import { Component } from '@angular/core';
import { IBooks } from '../interfaces/IBooks';
import { ICategories } from '../interfaces/ICategories';
import { IUser } from '../interfaces/IUser';
import { EndpointService } from '../service/endpoint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private endpointService: EndpointService) {}
}
