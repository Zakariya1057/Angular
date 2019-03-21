import { Injectable} from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from '../shared/recipe.service';

@Injectable({
  providedIn: 'root'
})

export class CannotGuardService implements CanDeactivate<RecipeEditComponent> {

  constructor(public recipe:RecipeService,public router:Router){}

  canDeactivate(
    component: RecipeEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    if(this.recipe.formEditing){
      if (confirm('Do You Want To Leave Before Saving Your Changes') === true){
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return true;
    } 

  }


}
