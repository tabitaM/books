import { Component, OnInit } from '@angular/core';
import { IBooks } from '../interfaces/IBooks';
import { ICategories } from '../interfaces/ICategories';
import { EndpointService } from '../service/endpoint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: IBooks[] = null;
  categories: ICategories[] = null;
  constructor(private endpointService: EndpointService) {}

  ngOnInit() {
    this.getBooks();
    this.getCategories();
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
