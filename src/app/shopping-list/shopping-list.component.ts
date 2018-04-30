import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Test 1', 10),
    new Ingredient('Test 2', 100),
    new Ingredient('Test 3', 1000)
  ];

  constructor() { }

  ngOnInit() {
  }

}
