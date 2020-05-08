import { AuthQuery } from "./state/auth.query";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { take, switchMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private authQuery: AuthQuery, private router: Router) {}

  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  canActivate(): Observable<boolean> {
    return this.authQuery.isLoggedIn$.pipe(
      take(1),
      switchMap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(["/login"]);
        }

        return of(isLoggedIn);
      })
    );
  }
}
