import { Directive, HostListener, ElementRef, Renderer2, HostBinding, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  showing:boolean = false;
 
parent;
sibling;

  constructor(private elRef:ElementRef,private renderer: Renderer2) {

  }

  @HostListener('click') onclick(event:any){
    
    if (!this.showing){
      this.renderer.addClass(this.parent ,'show');
      this.renderer.addClass(this.sibling  ,'show');
    }
    else {
      this.renderer.removeClass(this.parent ,'show');
      this.renderer.removeClass(this.sibling  ,'show');
    }

    this.showing = !this.showing;
  }
  
  ngOnInit(){
    this.sibling = this.renderer.nextSibling(this.elRef.nativeElement);
    this.parent = this.renderer.parentNode(this.elRef.nativeElement);
    console.log(this.sibling);
  }


}
