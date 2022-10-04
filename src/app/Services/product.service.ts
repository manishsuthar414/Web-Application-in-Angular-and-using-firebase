import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDownloadURL } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore:AngularFirestore, private http:HttpClient) { }
  getAllProducts() {
    return this.firestore.collection('products').snapshotChanges()
  }

buy(){}
    
    addNewProduct(name: any, price: any, image: File) {
      return new Promise((resolve, reject) => {
        let ref = this.firestore.doc('/products/' + image.name)
        console.log(ref)
        // ref.put(image).then(() => {
        //   ref.getDownloadURL().subscribe((imgUrl: any) => {
        //     this.firestore.collection(`products`).add({name, price, imgUrl})
        //     .then(() => resolve('Added successfuly!'))
        //     .catch(() => reject('Oops! can not add this product, someting is wrong!'))
        //   })
        // })
      })
    }
}