import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appEditable]'
})

export class EditableDirective {

  Editable:boolean = false;

  constructor(private elRef: ElementRef,private rend:Renderer2) { }

  @HostListener('click') onclick(){

    if (this.Editable === false){
      this.Editable = !this.Editable;
      let child = this.rend.createElement('input');
      let parent = this.rend.parentNode(this.elRef.nativeElement);
      this.rend.appendChild(parent,child);
    }
    else {

    }

  }

}
