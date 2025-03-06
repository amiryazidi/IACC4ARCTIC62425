import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   title: string  =  "welcome 4 arctic 6 "
  color!: string
  priceSearch!:number
  products :any= []


     constructor(private ps: ProductService){

     }


     ngOnInit(){
      this.products=this.ps.products
     }
   show(){
      alert("hello")
   }

   like(p : any){
      p.like++
   }

   buy(p : any){
    p.quantity--
 }

}
