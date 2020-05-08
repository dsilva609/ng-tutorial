import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "protractor";

@Component({
  selector: "bc-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"],
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();

  constructor() {}
}
