import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    private ingredients:Ingredient[] = 
        [
          new Ingredient('Apple', 10),
          new Ingredient('Tomato', 5)
        ];
    
    getIngredients() {
        return this.ingredients.slice();
    }
    
    addIngredient(event) {
        this.ingredients.push(event);
        this.ingredientsChanged.emit(this.getIngredients());
    }
    
    addIngredients(ingredients:Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.getIngredients());
    }
}