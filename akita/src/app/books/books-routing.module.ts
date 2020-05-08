import { BookExistsGuard } from './book-exists.guard';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

export const routes: Routes = []
  { path: 'find', component: FindBookPageComponent },
  {
    path: ':id',
    component: ViewBookPageComponent,
    canActivate: [BookExistsGuard]
  },
  { path: '', component: CollectionPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule{}
