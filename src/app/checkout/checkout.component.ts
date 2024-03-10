import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../Shared Services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cartId: string = '';

  payment: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  })

  constructor(private _cartService: CartService, private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.paramMap.subscribe((res: any) =>{
      this.cartId = res.params.cartId;
    })
  }


  onlinepayment() {
    console.log(this.payment);
    this._cartService.payCart(this.payment.value,this.cartId).subscribe({
      next: data => {
        console.log(data);
        window.location.href = data.session.url
      }
    })
  }
}
