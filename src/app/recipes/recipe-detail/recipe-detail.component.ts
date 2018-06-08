import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

	detailItem:Recipe;
	id: number;

	constructor(
		private recipeService: RecipeService, 
		private route: ActivatedRoute,
		private router: Router) {
		
	}

	ngOnInit() {

    	this.route.params
	      .subscribe(
	        (params: Params) => {
	        	this.id = +params['id']; 
	        	this.detailItem = this.recipeService.getCurrentRecipe(this.id);          
	        }
	      );
	}

	onAddToShoppingList(){
		this.recipeService.addIngredientsToShoppingList(this.detailItem.ingredients);
	}

	onEditRecipe(){
		this.router.navigate(['edit'], {relativeTo: this.route});
	}

}
