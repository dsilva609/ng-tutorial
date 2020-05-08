import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "protractor";

@Component({
  selector: "bc-book-search",
  templateUrl: "./book-search.component.html",
  styleUrls: ["./book-search.component.scss"],
})
export class BookSearchComponent {
  @Input() query = "";
  @Input() searching = false;
  @Input() error = "";
  @Output() search = new EventEmitter<string>();
}
