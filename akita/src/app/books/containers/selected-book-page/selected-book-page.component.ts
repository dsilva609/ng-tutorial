import { BooksService } from "./../../state/book.service";
import { BooksQuery } from "./../../state/book.query";
import { Observable } from "rxjs";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Book } from "../../state/book.model";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "bc-selected-book-page",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./selected-book-page.component.html",
  styleUrls: ["./selected-book-page.component.css"],
})
export class SelectedBookPageComponent implements OnInit {
  book$: Observable<Book>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(
    private booksQuery: BooksQuery,
    private booksService: BooksService
  ) {
    this.book$ = this.booksQuery.selectActive();
    this.isSelectedBookInCollection$ = this.booksQuery.isInCollection$;
  }

  ngOnInit() {}

  updateCollection({ id }: Book) {
    this.booksService.updateCollection(id);
  }
}
