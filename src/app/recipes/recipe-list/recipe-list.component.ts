import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] =[
  new Recipe('A Test Image','Simple Test','https://www.allrecipes.com/thmb/khgqPNqz5bqldRvnZnspWv5dyOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9454-greek-baklava-s-tuttle-3x2-1-8c3582fd5fc14786a399e0122ca89e47.jpg'),
  new Recipe('A Test Image 2','Simple Test 2','https://assets.epicurious.com/photos/62d6c513077a952f4a8c338c/1:1/w_2560%2Cc_limit/PannaCotta_RECIPE_04142022_9822_final.jpg')
];
}
