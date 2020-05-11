import { map } from "rxjs/operators";
import { BooksQuery } from "./book.query";
import { BooksStore } from "./books.store";
import { Injectable } from "@angular/core";
import { transaction, ID } from "@datorama/akita";
import { Book } from "./book.model";
import { forkJoin } from "rxjs";
import { GoogleBooksService } from "src/app/core/services/google-books-service";

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
    //const nonCollection = this.bookQuery.nonCollectionBooks;
    //this.bookStore.remove([...nonCollection]);
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
    const collection = this.bookQuery.getCollection;

    // if (
    //   collection === undefined ||
    //   collection == null ||
    //   collection.length === 0
    // ) {
    //   console.log("unable to load books");

    //   return;
    // }

    const books$ = collection.map((id) => this.googleService.retrieveBook(id));

    forkJoin(books$).subscribe((books) => this.add(books as Book[]));
  }

  updateCollection(bookId: ID) {
    console.log("updating id " + bookId);

    this.bookStore.updateCollection(bookId);
    //this.bookStore.setActive(bookId);
    const json = JSON.stringify(this.bookQuery.getCollection);
    // console.log("saving ids " + json);

    localStorage.setItem("collection", json);
  }
}
