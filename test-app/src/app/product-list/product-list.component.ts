import { Component } from "@angular/core";

import { products, Product } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  products: Array<Product> = products;

  onNotify(): void {
    window.alert("Notified. Monkey Fighter!");
  }

  share(): void {
    window.alert("The product has been shared!");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
