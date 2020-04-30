import { Component } from '@angular/core';
import { EndpointService } from '../service/endpoint.service';
import { IBooks } from '../interfaces/IBooks';
import { ICategories } from '../interfaces/ICategories';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  booksSelectedByCategory: IBooks[] = [];
  categorySelectedId: number;
  categoryClicked: boolean = false;

  constructor(private endpointService: EndpointService) {
    this.endpointService.getBooks().subscribe(books => {
      console.log("BOOKS:", books);
      this.booksSelectedByCategory = books;
    });
  }

  showBooksByCategory(categorySelected: string) {
    this.categoryClicked = true;
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
    this.booksSelectedByCategory = this.endpointService.books;
    return this.booksSelectedByCategory;
  }
}
