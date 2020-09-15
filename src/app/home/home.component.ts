import { Component } from '@angular/core';
import { EndpointService } from '../service/endpoint.service';
import { IBooks } from '../interfaces/IBooks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  booksDisplayed: IBooks[] = [];
  selectedCategory: number = -1;
  isEditingCategory: number = -1;

  constructor(private endpointService: EndpointService) {
    this.endpointService.getAsyncData().then((books) => {
      console.log('BOOKS: ', books);
      this.booksDisplayed = books;
    });
  }

  showAllBooks() {
    this.booksDisplayed = this.endpointService.books;
  }

  showBooksByCategory(selectedCategoryId: number) {
    this.booksDisplayed = this.endpointService.books.filter(
      (book) => book.categoryId === selectedCategoryId
    );
  }

  showEditButton(selectedCategoryId: number) {
    this.selectedCategory = selectedCategoryId;
  }

  removeEditButton() {
    this.selectedCategory = -1;
  }

  setIsEditingCategory(selectedCategoryId: number) {
    this.isEditingCategory = selectedCategoryId;
  }

  removeIsEditingCategory() {
    this.isEditingCategory = -1;
  }

  updateCategory() {
    this.removeIsEditingCategory();
  }

  displayBookDescriptionById(id: number) {
    console.log('ID: ', id);
    this.booksDisplayed.filter((book) => {
      if (book.id === id) {
        console.log(book.description);
        return book.description;
      }
    });
  }
}
