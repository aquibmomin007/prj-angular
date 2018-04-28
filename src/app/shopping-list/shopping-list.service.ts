import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	private ingredients: Ingredient[] = [
	    new Ingredient('Apples', 7),
	    new Ingredient('Tomatoes', 12),
	];

	getIngredients(){
		return this.ingredients.slice();
	}
}