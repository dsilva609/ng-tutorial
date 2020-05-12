import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends QueryEntity<AuthState> {
  isLoggedIn$ = this.select((state) => !!state.token);

  constructor(protected store: AuthStore) {
    super(store);
  }

  isLoggedIn() {
    return !!this.getValue().token;
  }
}
