import { AfterContentInit, Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective {

   
  @Input() public appAutoFocus: boolean;
 

  public constructor(private el: ElementRef) {

  }

  public ngAfterContentInit() {

      setTimeout(() => {
          this.el.nativeElement.focus();
          this.el.nativeElement.select();
      }, 500);

  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.select();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.select();
  }
  //onmouseup
}
