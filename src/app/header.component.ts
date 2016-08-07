import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import { Observable } from 'rxjs/Rx';
@Component({
  moduleId: module.id,
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives: [DropdownDirective, ROUTER_DIRECTIVES]
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService ) { }

  onStore(){
    this.recipeService.storeData().subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  onFetch(){
    this.recipeService.fetchData(); 
  }

}
