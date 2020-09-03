import { Component } from '@angular/core';
import { EndpointService } from '../service/endpoint.service';
import { IBooks } from '../interfaces/IBooks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  booksSelectedByCategory: IBooks[] = [];
  categorySelectedId: number;
  isCategoryFocused: boolean = false;

  constructor(private endpointService: EndpointService) {
    this.endpointService.getAsyncData().then(books => {
      console.log("BOOKS: ", books);
      this.booksSelectedByCategory = books;
    })
  }

  showBooksByCategory(categorySelected: string) {
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

  displayBookDescriptionById(id: number) {
    console.log("ID: ", id);
    this.booksSelectedByCategory.filter((book) => {
      if(book.id === id) {
        console.log(book.description);
        return book.description;
      }
    });
  }

  categoryFoscusedIn(name: string): void {
    this.isCategoryFocused = true;
    console.log("Focus In for "+name);
  }

  categoryFoscusedOut(name: string): void {
    this.isCategoryFocused = false;
    console.log("Focus Out for "+name);
  }
}
