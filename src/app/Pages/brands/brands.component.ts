import { Component, OnInit } from '@angular/core';
import { error } from '@rxweb/reactive-form-validators';
import { Brands } from 'src/app/interfaces/brands';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  allBrands : Brands[] = [];
  constructor(private _brandsService:BrandsService){  }


  ngOnInit(): void {
    this.getBrands()
  }


  getBrands(){
    this._brandsService.getBrands().subscribe({
      next:data =>{
        this.allBrands = data.data;
        console.log(this.allBrands);
        
      },error:(err)  =>{
        console.log(err);
        
      }
    })
  }

}
