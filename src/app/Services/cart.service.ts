import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { Route, Router } from '@angular/router';

@Injectable({                                                 
  providedIn: 'root'
})
export class CartService {

  constructor(public firestore: AngularFirestore, private authSer: AuthService, private router:Router) { }
  addToCart(cart: any) {
    return this.firestore.collection(`products/${this.authSer.userid}/cart`).add(cart)
  }

  getCart() {
    return this.firestore.collection(`products/${this.authSer.userid}/cart`).snapshotChanges()
  }

  updateAmount(id: any, amount: any) {
    return this.firestore.doc(`products/${this.authSer.userid}/cart/${id}`).update({amount})
  }

  deleteProduct(id: any) {
    return this.firestore.doc(`products/${this.authSer.userid}/cart/${id}`).delete()
  }
  CartBtn(){
    this.router.navigate(['/cart'])
  }

}
