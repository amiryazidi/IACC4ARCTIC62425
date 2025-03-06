import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  products = [
    {id: 1 , title : "product 1" , price : 100, quantity : 10 , like : 0, image : "https://www.istore.com.tn/2418-home_default/iphone-12-avec-128-go.jpg"},
    {id: 2 , title : "iphone 15" , price : 2000, quantity : 10 , like : 0, image : "https://cdn.idealo.com/folder/Product/202069/5/202069577/s4_produktbild_max/apple-iphone-14.jpg"},
    {id: 3 , title : "iphone 16" , price : 3000, quantity : 5 , like : 0, image : "https://boutiquepro.orange.fr/catalog/product/i/p/iphone_16_pro_titane_sable_2_1.jpg"},
   ]

   getStat(){
    
   }

  constructor() { }
}
