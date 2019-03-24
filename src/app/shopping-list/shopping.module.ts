import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingItemDirective } from './shopping-item.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
        ShoppingItemDirective,
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})

export class ShoppingModule {

}