import { Injectable } from '@angular/core';
import { Auth, createAuth } from './auth.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface AuthState extends EntityState<Auth> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', resettable: true })
export class AuthStore extends EntityStore<AuthState> {
  constructor() {
    super(createAuth);
  }
}
