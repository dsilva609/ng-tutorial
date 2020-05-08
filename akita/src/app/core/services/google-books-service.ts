import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Book } from "src/app/books/state/book.model";
import { ID } from "@datorama/akita";

@Injectable()
export class GoogleBooksService {
  private API_PATH = "https://www.googleapis.com/books/v1/volumes";

  /**
   *
   */
  constructor(private http: HttpClient) {}

  searchBooks(queryTitle: ID): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(`${this.API_PATH}?q=${queryTitle}`)
      .pipe(map((books) => books.items || []));
  }

  retrieveBooks(volumeId: ID): Observable<Book> {
    return this.http.get<Book>(`${this.API_PATH}/${volumeId}`);
  }
}
