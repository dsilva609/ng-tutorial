import {
  EntityState,
  ID,
  StoreConfig,
  EntityStore,
  IDS,
  ActiveState,
} from "@datorama/akita";
import { Book } from "./book.model";
import { Injectable } from "@angular/core";

export interface BookState extends EntityState<Book>, ActiveState {
  searchTerm: string;
  resultIds: ID[];
  collection: ID[];
}

const initialState = {
  searchTerm: "",
  resultIds: [],
  loading: false,
  collection: JSON.parse(localStorage.getItem("collection") as string) || [],
  // localStorage.getItem("collection") !== undefined &&
  // localStorage.getItem("collection") != null
  //   ? JSON.parse(localStorage.getItem("collection") as string)
  //   : [],
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
    this.update({ searchTerm: searchTerm });
  }

  updateResultIds(resultIds: ID[]) {
    this.update({ resultIds: resultIds });
  }

  updateCollection(id: ID) {
    console.log("updating collection");

    this.toggleActive(id);
    this.update((state) => ({
      collection: state, // this.toggleActive(id),
    }));
  }
}
