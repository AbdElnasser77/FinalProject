import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories } from 'src/app/interfaces/categories';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Categories[] = [];
  categoryName: string = '';

  constructor(private _categoriesService: CategoriesService, private _activatedRoute: ActivatedRoute) {

  }


  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    return this._categoriesService.getCatogeries().subscribe({
      next: data => {
        this.categories = data.data;
        console.log(this.categories);

      }, error: (err) => {
        console.log(err);
      }
    })
  }



  displayName(name:string) {
    this.categoryName = name;
    console.log(this.categoryName);
  }
}
