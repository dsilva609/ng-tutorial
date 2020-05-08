import { EllipsisPipe } from "./ellipsis.pipe";
import { AddCommasPipe } from "./add-commas.pipe";
import { NgModule } from "@angular/core";

export const PIPES = [AddCommasPipe, EllipsisPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}
