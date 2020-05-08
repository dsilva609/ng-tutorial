import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    AkitaNgDevtools,
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
