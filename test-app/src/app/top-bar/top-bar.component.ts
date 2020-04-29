import { CartService } from "./../cart.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent implements OnInit {
  badgeCount: number;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      this.badgeCount = this.cartService.getItemCount();
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
