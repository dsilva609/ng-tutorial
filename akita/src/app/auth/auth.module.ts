import { AuthRoutingModule } from "./auth-routing.module";
import { AuthQuery } from "./state/auth.query";
import { AuthGuardService } from "./auth-guard.service";
import { AuthService } from "./state/auth-service";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthStore } from "./state/auth.store";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";

export const COMPONENTS = [LoginPageComponent, LoginFormComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      // tslint:disable-next-line: no-use-before-declare
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuardService, AuthQuery, AuthStore],
    };
  }
}

@NgModule({
  imports: [AuthModule, AuthRoutingModule],
})
export class RootAuthModule {}
