import { CartQuery } from "./../cart/cart.query";
import { CartService } from "../cart/cart.service";
import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent implements OnInit {
  badgeCount = of<number>();

  constructor(private cartService: CartService, private cartQuery: CartQuery) {}

  ngOnInit(): void {
    this.badgeCount = this.cartQuery.selectCount();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
