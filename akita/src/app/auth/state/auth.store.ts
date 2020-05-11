import { StoreConfig, Store } from "@datorama/akita";

export type User = {
  name: string;
};

export type AuthState = {
  user: User | null;
};

export const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

@StoreConfig({ name: "auth" })
export class AuthStore extends Store<AuthState> {
  /**
   *
   */
  constructor() {
    super(initialState);
  }

  login(user: User) {
    this.update({ user });

    localStorage.setItem("user", JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("collection");
    this.update(initialState);
  }
}
