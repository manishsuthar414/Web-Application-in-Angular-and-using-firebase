import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDownloadURL } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  constructor(private firestore:AngularFirestore, private http:HttpClient) { }

// fetch all the products in the database in // firebase and collection products 

  getAllProducts() {
    return this.firestore.collection('products').snapshotChanges()
  }

buy(){}
    
addNewProduct(name: any, price: any, subtitle:any, imgUrl:any) {
    this.firestore.collection(`products`).add({name, price, subtitle,imgUrl})
      return new Promise((resolve, reject) => {
        let ref = this.firestore.doc('/products/')
        console.log(ref)
        // ref.set(image).then(() => getDownlo/adURL.subscribe((imgUrl: any) => {
          this.firestore.collection(`products`).add({ name, price})
            .then(() => resolve('Added successfuly!'))
            .catch(() => reject('Oops! can not add this product, someting is wrong!'));
        // }))
      })
    }



}