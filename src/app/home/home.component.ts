import { Component } from '@angular/core';
import { EndpointService } from '../service/endpoint.service';
import { IBooks } from '../interfaces/IBooks';
import { ICategories } from '../interfaces/ICategories';
import { of } from 'rxjs';
import { I18nSelectPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  booksSelectedByCategory: IBooks[] = [];
  categorySelectedId: number;
  categoryButtonToggle: boolean = true;

  constructor(private endpointService: EndpointService) {
    this.endpointService.getAsyncData().then(books => {
      console.log("BOOKS: ", books);
      this.booksSelectedByCategory = books;
    })
  }

  showBooksByCategory(categorySelected: string) {
    this.categoryButtonToggle = false;
    this.endpointService.categories.filter((category) => {
      if (category.name === categorySelected) {
        this.categorySelectedId = category.id;
      }
    });
    return (this.booksSelectedByCategory = this.endpointService.books.filter(
      (book) => book.categoryId === this.categorySelectedId
    ));
  }

  showAllBooks(): IBooks[] {
    this.categoryButtonToggle = true;
    this.booksSelectedByCategory = this.endpointService.books;
    return this.booksSelectedByCategory;
  }
}
