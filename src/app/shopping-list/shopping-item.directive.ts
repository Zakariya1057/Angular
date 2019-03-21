import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { ShoppingService } from './shopping.service';

@Directive({
  selector: '[appShoppingItem]'
})

export class ShoppingItemDirective {

  constructor(
    private elRef:ElementRef,
    private shoppingService:ShoppingService
    ) { }
index:number;

  @HostListener('click') onclick(){
    this.index = this.elRef.nativeElement.getAttribute('index');
    this.shoppingService.DeleteFromList(this.index);
  }
  
}
