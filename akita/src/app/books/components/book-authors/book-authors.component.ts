import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../../state/book.model";

@Component({
  selector: "bc-book-authors",
  templateUrl: "./book-authors.component.html",
  styleUrls: ["./book-authors.component.scss"],
})
export class BookAuthorsComponent implements OnInit {
  @Input() book: Book;
  constructor() {}

  get authors() {
    return this.book.volumeInfo.authors;
  }
  ngOnInit() {}
}
