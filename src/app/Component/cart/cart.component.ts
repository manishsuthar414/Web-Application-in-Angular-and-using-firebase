import { Component, OnInit } from '@angular/core';
import { Shopping } from 'src/app/Models/Shopping';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Array<Shopping>; 
  constructor(public cartSer:CartService) { }

  ngOnInit(): void {
    this.cartSer.getCart().subscribe(cart => {
      this.cart = cart.map((shopping:any) => {
        return {
          id: shopping.payload.doc.id,
          amount: shopping.payload.doc.data()['amount'],
          name: shopping.payload.doc.data()['name'],
          price: shopping.payload.doc.data()['price'],
          // imgUrl:shopping.payload.doc.data()['imgUrl']
        }
      })
      console.log(this.cart)
    }, err => {
      console.log('err (loading cart)', err.message)
    })
  }
  save(index:any) {
    this.cartSer.updateAmount(this.cart[index].id, this.cart[index].amount)
  }

  delete(index:any) {
    console.log('delete: ', this.cart[index].id)
    this.cartSer.deleteProduct(this.cart[index].id)
  }

}
