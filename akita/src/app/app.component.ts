import { Observable } from "rxjs";
import { Observable } from "rxjs";
import { LayoutService } from "./core/state/layout.service";
import { LayoutQuery } from "./core/state/layout.query";
import { BooksService } from "./books/state/book.service";
import { AuthService } from "./auth/state/auth-service";
import { AuthQuery } from "./auth/state/auth.query";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;
  title = "akita";
  /**
   *
   */
  constructor(
    private authQuery: AuthQuery,
    private authService: AuthService,
    private bookService: BooksService,
    private layoutQuery: LayoutQuery,
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.showSidenav$ = this.layoutQuery.sideNavOpen$;
    this.loggedIn$ = this.authQuery.isLoggedIn$;
    this.bookService.loadBooksToStore();
  }

  closeSidenav() {
    this.layoutService.setSideNavState(false);
  }

  openSidenav() {
    this.layoutService.setSideNavState(true);
  }

  logout() {
    this.closeSidenav();
    this.authService.logout();
  }
}
