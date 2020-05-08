import { Injectable } from "@angular/core";
import { LayoutState, LayoutStore } from "./layout.store";
import { Query } from "@datorama/akita";

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
