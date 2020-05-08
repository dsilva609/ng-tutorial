import { BooksService } from "./../../state/book.service";
import { ID } from "@datorama/akita";
import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "protractor";
import { Book } from "../../state/book.model";
import { Location } from "@angular/common";

@Component({
  selector: "bc-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.scss"],
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;
  @Input() inCollection: boolean;
  @Output() add = new EventEmitter<Book>();
  @Output() remove = new EventEmitter<Book>();

  constructor(private location: Location) {}

  get id() {
    return this.book.ID;
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
      this.book.volumeInfo.imageLinks.smallthumbnail &&
      this.book.volumeInfo.imageLinks.smallthumbnail.replace("http:", "")
    );
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {}
}
