import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/736x/e2/14/d3/e214d371faaac3e8e47361a653f868ea--recipe-book-templates-cookbook-template.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/736x/e2/14/d3/e214d371faaac3e8e47361a653f868ea--recipe-book-templates-cookbook-template.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
