import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  id!:number

  formLogin =  new FormGroup({
    id : new FormControl({value: this.generateId(), disabled: true },Validators.required),
    title : new FormControl('',[Validators.required,Validators.minLength(4)]),
    price : new FormControl('',[Validators.required,Validators.min(0) ]),
    quantity : new FormControl('',[Validators.required,Validators.min(0)] ),
    image : new FormControl ('',[Validators.required, Validators.minLength(8)]),
   })

   constructor(private ps:ProductService){}

   generateId(): number {
    return Math.floor(Math.random() * 10000) + 1; // Génération d'un ID aléatoire
  }

  save(){
    this.ps.products.push(this.formLogin.value as any)
  }
}
