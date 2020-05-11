import { BooksQuery } from "./../../state/book.query";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Book } from "../../state/book.model";

@Component({
  selector: "bc-collection-page",
  templateUrl: "./collection-page.component.html",
  styleUrls: ["./collection-page.component.css"],
})
export class CollectionPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookQuery: BooksQuery) {
    this.books$ = this.bookQuery.selectMany(this.bookQuery.getCollection);
  }

  ngOnInit() {}
}
