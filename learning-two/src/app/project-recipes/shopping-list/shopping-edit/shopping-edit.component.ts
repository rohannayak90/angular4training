import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('inputName') inputName:ElementRef;
  @ViewChild('inputAmount') inputAmount:ElementRef;
  //@Output() addIngredient = new EventEmitter<Ingredient>();
  
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }
  
  onAddItem() {
    /*this.addIngredient.emit(
      new Ingredient(
        this.inputName.nativeElement.value,
        this.inputAmount.nativeElement.value
      )
    );*/
    this.slService.addIngredient(new Ingredient(
        this.inputName.nativeElement.value,
        this.inputAmount.nativeElement.value
      )
    );
  }

}
