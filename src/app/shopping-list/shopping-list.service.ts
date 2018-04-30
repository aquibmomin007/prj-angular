import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	ingredientsChanged = new EventEmitter<Ingredient[]>();
	private ingredients: Ingredient[] = [
	    new Ingredient('Apples', 7),
	    new Ingredient('Tomatoes', 12),
	];

	getIngredients(){
		return this.ingredients.slice();
	}

	onIngredientAdded(newIngredient:Ingredient){
	    this.ingredients.push(newIngredient);
	    this.ingredientsChanged.emit(this.ingredients.slice());
	}

	addIngredientsFromRecipeService(ingredients: Ingredient[]){
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

}