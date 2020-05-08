import { ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { BooksService } from "./../../state/book.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "bc-view-book-page",
  templateUrl: "./view-book-page.component.html",
  styleUrls: ["./view-book-page.component.css"],
})
export class ViewBookPageComponent implements OnInit {
  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const activeBookId = this.route.snapshot.paramMap.get("id");

    this.bookService.setActive(activeBookId);
  }
}
