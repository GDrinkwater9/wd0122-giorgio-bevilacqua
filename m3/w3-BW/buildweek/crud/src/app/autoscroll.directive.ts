import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoscroll]'
})
export class AutoscrollDirective {

  constructor(private e:ElementRef) {
    
   }

   ngAfterViewInit() {
   window.scrollTo(1000,0)
   }

}
