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
  user: IUser = null;
  books: IBooks[] = null;
  categories: ICategories[] = null;
  constructor(private endpointService: EndpointService) {
    this.getUser();
    this.getBooks();
    this.getCategories();
  }

  getUser() {
    this.endpointService.getUser().subscribe((user: IUser) => {
      console.log('User details: ', user);
      this.user = user;
    });
  }

  getBooks() {
    this.endpointService.getBooks().subscribe((books: IBooks[]) => {
      console.log('Books: ', books);
      this.books = books;
    });
  }

  getCategories() {
    this.endpointService
      .getCategories()
      .subscribe((categories: ICategories[]) => {
        console.log('Categories: ', categories);
        this.categories = categories;
      });
  }
}
