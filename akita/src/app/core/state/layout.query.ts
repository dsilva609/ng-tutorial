import { Injectable, Query } from "@angular/core";

@Injectable()
export class LayoutQuery extends Query<LayoutState> {
  sideNavOpen$ = this.select((state) => state.sideNavOpen);

  /**
   *
   */
  constructor(protected store: LayoutStore) {
    super(store);
  }
}
