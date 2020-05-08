import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../../state/book.model";

@Component({
  selector: "bc-book-preview",
  templateUrl: "./book-preview.component.html",
  styleUrls: ["./book-preview.component.scss"],
})
export class BookPreviewComponent implements OnInit {
  @Input() book: Book;
  constructor() {}

  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallthumbnail.replace(
        "http:",
        ""
      );
    }

    return false;
  }

  ngOnInit() {}
}