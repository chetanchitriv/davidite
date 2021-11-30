import { Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAdComponent]'
})
export class AdComponentDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
