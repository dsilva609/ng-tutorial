import { Auth } from './auth.model';
import { AppModule } from '../../app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthStore, AuthState } from './auth.store';
import { tap } from 'rxjs/operators';
import { persistState } from '@datorama/akita';
import { of } from 'rxjs';

persistState({
  include: ['auth.token'],
  key: 'AkitaProducts',
});

//platformBrowserDynamic()
//.bootstrapModule(AppModule)
//.catch((err) => console.error(err));

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private authStore: AuthStore) {}

  login(cred: Auth) {
    this.authStore.update({ token: 'token', name: cred.name });

    return of(cred);
    //return this.http
    //.post<AuthState>(`${API}/login`, cred)
    //.pipe(tap(({ token, name }) => this.authStore.update({ token, name })));
  }

  logout() {
    this.authStore.reset();
    localStorage.removeItem('AkitaProducts');
  }
}
