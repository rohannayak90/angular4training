import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes:Recipe[] = 
        [
            new Recipe(
                'Recipe 1',
                'Recipe 1 Description',
                'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg',
                [
                    new Ingredient('Meat', 1),
                    new Ingredient('French Fries', 20)
                ]
            ),
            new Recipe(
                'Recipe 2',
                'Recipe 2 Description',
                'https://i.pinimg.com/736x/c5/39/10/c53910af51143e42aafeba48ca0a7d3a--slimming-world-meals-slimming-recipes.jpg',
                [
                    new Ingredient('Bun', 2),
                    new Ingredient('Meat', 1)
                ]
            )
        ];
    
    constructor(private slService:ShoppingListService) {
        
    }
    
    getRecipes() {
        return this.recipes.slice();
    }
    
    addIngredients(ingredients:Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}