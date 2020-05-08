import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { Book } from "./book.model";
import { BooksStore, BookState } from "./books.store";

@Injectable()
export class BooksQuery extends QueryEntity<BookState, Book> {
  /**
   *
   */
  constructor(protected store: BooksStore) {
    super(store);
  }

  selectSearchTerm$ = this.select((state) => state.searchTerm);
  selectResultIds$ = this.select((state) => state.resultIds);
  selectCollection$ = this.select((state) => state.collection);

  isInCollection$ = this.selectCollection$.pipe(
    map((ids) => ids.includes(this.getActiveId()) === true)
  );

  get getSearchTerm() {
    return this.getValue().searchTerm;
  }

  get collection() {
    return this.getValue().collection;
  }

  get nonCollectionBooks(): string[] {
    return this.getAll({
      filterBy: ({ id }) => this.collection.includes(id) === false,
    }).map(({ id }) => id);
  }
}