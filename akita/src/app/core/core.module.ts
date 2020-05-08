import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { NotFoundPageComponent } from "./containers/not-found-page/not-found-page.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { NavItemComponent } from "./components/nav-item/nav-item.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { GoogleBooksService } from "./services/google-books-service";
import { BooksService } from "../books/state/book.service";
import { BooksStore } from "../books/state/books.store";
import { BooksQuery } from "../books/state/book.query";
import { LayoutService } from "./state/layout.service";
import { LayoutStore } from "./state/layout.store";
import { LayoutQuery } from "./state/layout.query";

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        GoogleBooksService,
        BooksService,
        BooksStore,
        BooksQuery,
        LayoutService,
        LayoutStore,
        LayoutQuery,
      ],
    };
  }
}
