import { AuthGuardService } from "./auth/auth-guard.service";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundPageComponent } from "./core/containers/not-found-page/not-found-page.component";

export const routes: Routes = [
  { path: "", redirectTo: "/books", pathMatch: "full" },
  {
    path: "books",
    loadChildren: "./books/books.module#BooksModule",
    canActivate: [AuthGuardService],
  },
  { path: "**", component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
