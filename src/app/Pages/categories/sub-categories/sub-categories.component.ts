import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent {
  @Input() subs:string = '';
  

  constructor(private _categoriesService:CategoriesService){
  }
  

}
