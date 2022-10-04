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
  
  
  datalist: any[] | undefined;
  ngOnInit(): void {
    this.productObservable = this.productsService.getAllProducts().subscribe(data => {
      this.products = data.map((element:any) => {
        console.log(element.payload.doc.id +"    hhhhhhhhhhhhhhh")
        return {
          id: element.payload.doc.id,
          name: element.payload.doc.data()['name'], // or: ...element.payload.doc.data()
          price: element.payload.doc.data()['price'],
          imgUrl: element.payload.doc.data()['imgUrl']
        }
      })
    })
    
    // this.http.get<any>('https://webapp-3dd28-default-rtdb.firebaseio.com/product.json')
    // .pipe(map(resData => {
    //   // console.log(resData);
    //   const userArray = [];
    //   for (const key in resData) {
    //     console.log(key)
    //     userArray.push({ userId: key, ...resData[key] })
    //   }
    //   return userArray
    // }))
    // .subscribe(
    //   users => {
    //     // console.log(users);
    //     this.datalist = users

    //     })

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
  }
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

