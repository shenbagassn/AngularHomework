import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  cartItems:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(){
this.cartItems=this.cartItems+1;
  }
removeFromCart(){
  this.cartItems=this.cartItems-1;
}
}
