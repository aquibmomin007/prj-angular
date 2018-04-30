import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
	currentSelectedItem  = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
		new Recipe(
				'A Test Recipe 1', 
				'This is simply a test 1', 
				'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
				[new Ingredient('Meat', 4), new Ingredient('fries', 10)]
			),
	    new Recipe(
	    		'A Test Recipe 2', 
	    		'This is simply a test 2', 
	    		'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
	    		[new Ingredient('banana', 1), new Ingredient('apple', 10), new Ingredient('orange', 13)]
	    	)
	];

	constructor(private slService: ShoppingListService){

	}


	getRecipes(){
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredient:Ingredient[]){
		this.slService.addIngredientsFromRecipeService(ingredient);
	}
}