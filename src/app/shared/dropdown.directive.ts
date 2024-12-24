import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  constructor(private elementRf : ElementRef, private renderer : Renderer2) { }

  clicked = false;

  @HostListener('click') openToggle(eventData: Event){
    this.clicked = !this.clicked;
    const showEl = this.elementRf.nativeElement.querySelector('.dropdown-menu');
    if(this.clicked){
      this.renderer.addClass(showEl, 'show');
    }
    else{
      this.renderer.removeClass(showEl, 'show');  
    }
  }
}

