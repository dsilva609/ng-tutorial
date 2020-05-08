import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "protractor";

@Component({
  selector: "bc-nav-item",
  templateUrl: "./nav-item.component.html",
  styleUrls: ["./nav-item.component.css"],
})
export class NavItemComponent {
  @Input() icon = "";
  @Input() hint = "";
  @Input() routerLink: string | any[] = "/";
  @Output() navigate = new EventEmitter();

  constructor() {}
}
