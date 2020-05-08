import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BookDetailComponent } from "./books/components/book-detail/book-detail.component";
import { BookAuthorsComponent } from "./books/components/book-authors/book-authors.component";
import { BookPreviewComponent } from "./books/components/book-preview/book-preview.component";
import { BookPreviewListComponent } from "./books/components/book-preview-list/book-preview-list.component";
import { BookSearchComponent } from "./books/components/book-search/book-search.component";
import { LoginFormComponent } from "./auth/components/login-form/login-form.component";
import { NG_ENTITY_SERVICE_CONFIG } from "@datorama/akita-ng-entity-service";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { AkitaNgRouterStoreModule } from "@datorama/akita-ng-router-store";
import { environment } from "../environments/environment";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { MaterialModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    //AkitaNgDevtools.forRoot(),
    CommonModule,
    BrowserModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule.forRoot(),
    AppRoutingModule,
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
