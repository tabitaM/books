import { Component } from '@angular/core';
import { EndpointService } from '../service/endpoint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private endpointService: EndpointService) {}
}
