import {
  EntityState,
  ID,
  StoreConfig,
  EntityStore,
  IDS,
} from "@datorama/akita";
import { Book } from "./book.model";
import { Injectable } from "@angular/core";

export interface BookState extends EntityState<Book> {
  searchTerm: string;
  resultIds: ID[];
  collection: ID[];
}

const initialState = {
  searchTerm: "",
  resultIds: [],
  loading: false,
  collection: JSON.parse(localStorage.getItem("collection") as string) || [],
};

@Injectable()
@StoreConfig({ name: "books" })
export class BooksStore extends EntityStore<BookState, Book> {
  /**
   *
   */
  constructor() {
    super(initialState);
  }

  updateSearchTerm(searchTerm: string) {
    this.update({ searchTerm });
  }

  updateResultIds(resultIds: ID[]) {
    this.update({ resultIds });
  }

  updateCollection(id: ID) {
    this.update((state) => ({
      collection: this.toggleActive(id),
    }));
  }
}
