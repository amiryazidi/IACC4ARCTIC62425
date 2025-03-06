import { Component } from '@angular/core';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  listResidences:Residence[]=[]

  constructor(private rs:ResidenceService) { }
 


   ngOnInit(){
    this.rs.getResidences().subscribe(
      (data)=>this.listResidences=data
    )
  }

  supp(id:number){
    this.rs.DeleteResidence(id).subscribe(
      ()=>this.ngOnInit()
    )
  }

 /*   {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/R4.jpg", status: "En Construction"}
    ];

    */
}
