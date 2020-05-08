import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "bc-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent {
  @Input() open = false;
  constructor() {}
}
