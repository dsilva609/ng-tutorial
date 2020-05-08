import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { NgModule } from "@angular/core";
import { LoginPageComponent } from "./containers/login-page/login-page.component";

const routes: Routes = [{ path: "login", component: LoginPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
