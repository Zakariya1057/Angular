import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output()
  showRecipes = new EventEmitter<{
    elementRef;
  }>();
  @Output()
  showList = new EventEmitter<{
    elementRef;
  }>();
}
