import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categories } from 'src/app/interfaces/categories';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories-slider',
  templateUrl: './categories-slider.component.html',
  styleUrls: ['./categories-slider.component.css']
})
export class CategoriesSliderComponent implements OnInit {

  constructor(private _categories:CategoriesService) { }

  productCategories : Categories[] = [];

  ngOnInit(): void {
    this.getCategories();
  }


  
  getCategories(){
    this._categories.getCatogeries().subscribe({
      next:(data) => {
        this.productCategories = data.data;
      },error:(err) => {
        console.log(err);
      }
    })
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


}
