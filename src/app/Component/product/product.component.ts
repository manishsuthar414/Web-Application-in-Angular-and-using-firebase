import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Models/Product';
import { Subscription } from 'rxjs';
import { AngularFirestore,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { OnDestroy } from '@angular/core';
import { Shopping } from 'src/app/Models/Shopping';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy{
  // products: any;
  // add: any;
  products: Array<Product> = []
  productObservable!: Subscription;
  add: number = -1 // for view qte & buy button
  
  constructor(
    public auth: AuthService,
    public productsService:ProductService,
    private router:Router,
    private cartSer:CartService
    ) { 
      
    }
    
    cart!: Array<Shopping>;
  
  datalist: any[] | undefined;
  ngOnInit(): void {
    this.productObservable = this.productsService.getAllProducts().subscribe(data => {
      this.products = data.map((element:any) => {
        console.log(element.payload.doc.id +"    hhhhhhhhhhhhhhh")
        return {
          id: element.payload.doc.id,
          name: element.payload.doc.data()['name'], // or: ...element.payload.doc.data()
          price: element.payload.doc.data()['price'],
          imgUrl: element.payload.doc.data()['imgUrl'],
          subtitle: element.payload.doc.data()['subtitle']
        }
      })
    })
    
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

  ngOnDestroy() {
    this.productObservable.unsubscribe()
  }
  buy(amount: any): void {
    let selectedProduct = this.products[this.add]
    let data = {
      name: selectedProduct.name,
      amount: +amount,
      price: selectedProduct.price,

    }
    this.cartSer.addToCart(data)
    .then(result => this.add = -1)
    .catch(err => console.log('err', err))
    // this.router.navigate(['/cart'])
  }

   
      // this.router.navigate(['/login'])
    // console.log('add to cart', index)
    addToCart(index: any) {
      console.log(this.auth.userid)
      if(this.auth.userid)
        this.add = index
      else{console.log('err')}
        // this.router.navigate(['/login'])
      console.log('add to cart', index)
    }
    
    CartBtn(){
      this.router.navigate(['/cart'])
    }

    value = 1;

  handleMinus() {
      if(this.value=1){
        this.value-1
      }
    // this.value--;  
  }
  handlePlus() {
    this.value++;    
  }

  
  }
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

