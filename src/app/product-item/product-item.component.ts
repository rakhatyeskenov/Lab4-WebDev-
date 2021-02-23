import { Component } from "@angular/core";

import { products } from "../products";

import { linksList } from "../links";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent {
  products = products;

  share() {
    // window.alert("This is link of choosen product, please copy it: "); 
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
