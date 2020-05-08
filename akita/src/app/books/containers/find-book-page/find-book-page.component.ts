import { BooksService } from "./../../state/book.service";
import { BooksQuery } from "./../../state/book.query";
import { Observable } from "rxjs";
import { skip, filter } from "rxjs/operators";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Book } from "../../state/book.model";
import { debounceTime, switchMap } from "rxjs/operators";

//@TakeUntilDestroy()
@Component({
  selector: "bc-find-book-page",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./find-book-page.component.html",
  styleUrls: ["./find-book-page.component.css"],
})
export class FindBookPageComponent {
  searchQuery: string;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(
    private bookQuery: BooksQuery,
    private bookService: BooksService
  ) {
    this.searchQuery = this.bookQuery.getSearchTerm;
    this.loading$ = this.bookQuery.selectLoading();

    this.bookQuery.selectSearchTerm$
      .pipe(skip(1), filter(Boolean), debounceTime(300))
      .subscribe((searchTerm) => {
        this.bookService.searchBooks(searchTerm as string);
      });

    this.books$ = this.bookQuery.selectResultIds$.pipe(
      switchMap((ids) => this.bookQuery.selectMany(ids))
    );
  }

  search(query: string) {
    this.bookService.updateSearchTerm(query);
  }

  ngOnDestroy() {}
}
