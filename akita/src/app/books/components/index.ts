import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BookAuthorsComponent } from "./book-authors/book-authors.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookPreviewComponent } from "./book-preview/book-preview.component";
import { BookPreviewListComponent } from "./book-preview-list/book-preview-list.component";
import { BookSearchComponent } from "./book-search/book-search.component";
import { MaterialModule } from "src/app/material/material.module";
import { PipesModule } from "src/app/shared/pipes";

export const COMPONENTS = [
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewComponent,
  BookPreviewListComponent,
  BookSearchComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    PipesModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
