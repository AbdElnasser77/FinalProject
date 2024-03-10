import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(products : Product[] ,searchToken:string): Product[] {
    return products.filter((ele) => ele.title.toLowerCase().includes(searchToken.toLowerCase() ));
  }

}
