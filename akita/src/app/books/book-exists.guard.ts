import { catchError, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { Router, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class BookExistsGuard implements CanActivate {
  /**
   *
   */
  constructor(
    private googleBooks: GoogleBooksService,
    private router: Router,
    private bookQuery: BooksQuery,
    private bookService: BooksService
  ) {}

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  hasBookInApi(id: string): Observable<boolean>{
    return this.googleBooks.retrieveBook(id).pipe{
      map(book => !!book),
      catchError(() => {
        this.router.navigate(["/404"]);
        return of(false);
      });
    }
  }

  hasBook(id: string): Observable<boolean> {
    if (this.bookQuery.hasEntry(id)) {
      this.bookService.setActive(id);

      return of(true);
    }

    return this.hasBookInApi(id);
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasBook(route.params['id']);
  }
}
