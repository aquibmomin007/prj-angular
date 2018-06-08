import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
	currentSelectedItem  = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
		new Recipe(
				'Chicken Schnitzel', 
				'This is simply a test 1', 
				'https://www.recipetineats.com/wp-content/uploads/2017/08/Schnitzel-3-landscape.jpg',
				[new Ingredient('Meat', 4), new Ingredient('fries', 10)]
			),
	    new Recipe(
	    		'Chocolate Croissants', 
	    		'This is simply a test 2', 
	    		'https://www.homemadeinterest.com/wp-content/uploads/2017/02/Chocolate-Croissants-in-20-minutes_FB.jpg',
	    		[new Ingredient('banana', 1), new Ingredient('apple', 10), new Ingredient('orange', 13)]
	    	)
	];

	constructor(private slService: ShoppingListService){

	}

	getCurrentRecipe(id: number){
		return this.recipes.find(
			(s, i) => {
				return i === id;
			}
		);
	}

	getRecipes(){
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredient:Ingredient[]){
		this.slService.addIngredientsFromRecipeService(ingredient);
	}
}