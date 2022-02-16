import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
  // recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Fettucine Chicken Alfredo',
    'A wonderful and standard Italian dish',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg',
    [
      new Ingredient('Chicken', 20),
      new Ingredient('Fettucine', 1),
      new Ingredient('Alfredo', 1)

    ]),
    new Recipe('Another Test Recipe',
    'This is simply a test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWAzFGKqZ-eyjhDJAzoCcBPkC01R-Po37pbg&usqp=CAU',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Cheese', 1),
      new Ingredient('Onion', 1),
      new Ingredient('Sour Cream', 1),
      new Ingredient('Hard Shells', 12)

    ])
  ];

  constructor(private slService: ShoppingListService){}


getRecipes(){
  return this.recipes.slice();
}

getRecipe(index:number){
  return this.recipes[index];
}

addIngredToShopList(ingredients: Ingredient[]){
  this.slService.addIngredients(ingredients);
}

}
