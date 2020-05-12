import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Location } from "@angular/common";
import { Book } from "../../state/book.model";
import { Router } from "@angular/router";

@Component({
  selector: "bc-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.scss"],
})
export class BookDetailComponent {
  @Input() book: Book;
  @Input() inCollection: boolean;
  @Output() add = new EventEmitter<Book>();
  @Output() remove = new EventEmitter<Book>();

  constructor(private location: Location, private router: Router) {}

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

  get thumbnail() {
    return (
      this.book.volumeInfo.imageLinks &&
      this.book.volumeInfo.imageLinks.smallThumbnail &&
      this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:", "")
    );
  }

  goBack() {
    this.location.back();
  }

  viewCollection() {
    this.router.navigate(["/books"]);
  }
}
