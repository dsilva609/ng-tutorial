import { Injectable } from "@angular/core";
import { AuthState, AuthStore } from "./auth.store";
import { Query, toBoolean } from "@datorama/akita";

@Injectable()
export class AuthQuery extends Query<AuthState> {
  isLoggedIn$ = this.select((state) => toBoolean(state.user));

  /**
   *
   */
  constructor(protected store: AuthStore) {
    super(store);
  }
}
