import { map } from "rxjs/operators";
import { BooksQuery } from "./book.query";
import { BooksStore } from "./books.store";
import { Injectable } from "@angular/core";
import { transaction, ID } from "@datorama/akita";
import { Book } from "./book.model";
import { forkJoin } from "rxjs";

@Injectable()
export class BooksService {
  /**
   *
   */
  constructor(
    private bookStore: BooksStore,
    private bookQuery: BooksQuery,
    private googleService: GoogleBooksService
  ) {}

  searchBooks(searchTerm: string) {
    this.bookStore.setLoading(true);
    this.googleService.searchBooks(searchTerm).subscribe((books) => {
      this.updateBooks(books);
    });
  }

  @transaction()
  private updateBooks(books) {
    const nonCollection = this.bookQuery.nonCollectionBooks;
    this.bookStore.remove([...nonCollection]);
    this.add(books);
    this.bookStore.updateResultIds(books.map(({ id }) => id));
    this.bookStore.setLoading(false);
  }

  updateSearchTerm(searchTerm: string) {
    this.bookStore.updateSearchTerm(searchTerm);
  }

  setActive(id: ID) {
    this.bookStore.setActive(id);
  }

  add(books: Book[]) {
    this.bookStore.add(books);
  }

  loadBooksToStore() {
    const books$ = this.bookQuery.collection.map((id) =>
      this.googleService.retrieveBook(id)
    );

    forkJoin(books$).subscribe((books) => this.add(books as Book[]));
  }

  updateCollection(bookId: ID) {
    this.bookStore.updateCollection(bookId);

    localStorage.setItem(
      "collection",
      JSON.stringify(this.bookQuery.collection)
    );
  }
}
