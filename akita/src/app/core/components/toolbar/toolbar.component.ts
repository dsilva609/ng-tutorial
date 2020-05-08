import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "bc-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"],
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();

  constructor() {}
}
