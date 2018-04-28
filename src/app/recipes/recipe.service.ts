import { Recipe } from './recipe.model';

export class RecipeService{
	private recipes: Recipe[] = [
		new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
	    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
	];

	getRecipes(){
		return this.recipes.slice();
	}
}