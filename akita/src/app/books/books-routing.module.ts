import { BookExistsGuard } from "./book-exists.guard";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CollectionPageComponent } from "./containers/collection-page/collection-page.component";
import { FindBookPageComponent } from "./containers/find-book-page/find-book-page.component";
import { ViewBookPageComponent } from "./containers/view-book-page/view-book-page.component";

export const routes: Routes = [
  { path: "find", component: FindBookPageComponent },
  {
    path: ":id",
    component: ViewBookPageComponent,
    canActivate: [BookExistsGuard],
  },
  { path: "", component: CollectionPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
