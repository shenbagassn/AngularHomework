import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
ProductList:string[]=["Dell","Lenovo","HP","Sony"];
txtbox:string="";
  constructor() { }

  ngOnInit(): void {
  }
  createProducts(){
    this.ProductList.push(this.txtbox);
  }

}
