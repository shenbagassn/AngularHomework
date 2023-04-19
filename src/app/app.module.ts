import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AddproductsComponent } from './addproducts/addproducts.component';


@NgModule({
  declarations: [
    AppComponent,
    AddtocartComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
