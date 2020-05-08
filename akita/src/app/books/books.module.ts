import { BookExistsGuard } from "./book-exists.guard";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material.module";
import { BooksRoutingModule } from "./books-routing.module";
import { FindBookPageComponent } from "./containers/find-book-page/find-book-page.component";
import { ViewBookPageComponent } from "./containers/view-book-page/view-book-page.component";
import { SelectedBookPageComponent } from "./containers/selected-book-page/selected-book-page.component";
import { CollectionPageComponent } from "./containers/collection-page/collection-page.component";
import { ComponentsModule } from "./components";

@NgModule({
  imports: [CommonModule, MaterialModule, ComponentsModule, BooksRoutingModule],
  declarations: [
    FindBookPageComponent,
    ViewBookPageComponent,
    SelectedBookPageComponent,
    CollectionPageComponent,
  ],
  providers: [BookExistsGuard],
})
export class BooksModule {}
