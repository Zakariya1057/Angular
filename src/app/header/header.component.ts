import { Component, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() showRecipesToParent = new EventEmitter<{ String }>();
  @Output() showListToParent = new EventEmitter<{ String }>();

  showRecipes(event: any){
    this.showRecipesToParent.emit(event.target.innerText);
    console.log(event.target.innerText);
  }

  showList(event: any){
    this.showListToParent.emit(event.target.innerText);
    console.log(event.target.innerText);
  }
}
