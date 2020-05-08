import { AuthService, Creds } from "./../../state/auth-service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "bc-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmit(creds: Creds) {
    this.authService.login(creds).subscribe();
  }
}
