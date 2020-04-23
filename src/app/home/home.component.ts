import { Component } from '@angular/core';
import { EndpointService } from '../service/endpoint.service';
import { IBooks } from '../interfaces/IBooks';
import { ICategories } from '../interfaces/ICategories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  booksSelectedByCategory: IBooks[]= [];
  categorySelectedId: number;
  isLoaded: boolean = false;
  constructor(private endpointService: EndpointService) {
    if(!this.isLoaded) {
      this.booksSelectedByCategory = this.endpointService.books;
      this.isLoaded = true;
    }
    console.log("LOADED: ", this.isLoaded);
    console.log("BOOKS:", this.booksSelectedByCategory);
  }

  showBooksByCategory(categorySelected: string) {
    this.endpointService.categories.filter(category => {
      if(category.name === categorySelected) {
        this.categorySelectedId = category.id;
      }})
    return this.booksSelectedByCategory = this.endpointService.books.filter(book => book.categoryId === this.categorySelectedId);
  }

  showAllBooks(): IBooks[] {
    this.booksSelectedByCategory = this.endpointService.books;
    return this.booksSelectedByCategory;
  }
}
