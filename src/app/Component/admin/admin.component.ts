import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('image') image!: ElementRef

  constructor(
    public auth:AuthService,
    private productSer: ProductService,
    ) { }
  
  ngOnInit(): void {
  
  }
  addNewProduct(form: NgForm){
    let name = form.value.name,
      price = form.value.price,
      img = (this.image.nativeElement).files[0];

    this.productSer.addNewProduct(name, price, img)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
    console.log((this.image.nativeElement).files[0])
  }
}


