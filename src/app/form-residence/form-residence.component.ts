import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {

  residenceForm: FormGroup;
  id!:number
  residence!:Residence
  constructor(private rs:ResidenceService,private route:Router,private act:ActivatedRoute) {
    // Initialisation du formulaire avec FormGroup et FormControl
    this.residenceForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', Validators.required),
      image: new FormControl('../../assets/images/R2.jpg', [Validators.required]),
      status: new FormControl('', Validators.required)
    });
  }

    ngOnInit(){
      //1- recuperation de l'id depuis l'url
      this.id= this.act.snapshot.params['id']
      // 2- recupertaion de l'objet residence 
      this.rs.getResidenceById(this.id).subscribe(
        (data)=>{
          this.residence=data,
          console.log(this.residence)
          //3- remplir le formulaire avec l'objet residence
          this.residenceForm.patchValue(this.residence)
        }
      )

    }
  // Fonction appelée lors de la soumission du formulaire
  save() {
      if (this.id){
          this.rs.updateResidence(this.residenceForm.value,this.id).subscribe(
            ()=>this.route.navigateByUrl('/residence')
          )
      }else {
        this.rs.AddResidence(this.residenceForm.value).subscribe(
          ()=>this.route.navigateByUrl('/residence')
        )
      }

       
      }



  }

