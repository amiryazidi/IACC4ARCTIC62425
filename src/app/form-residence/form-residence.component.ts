import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {

  residenceForm: FormGroup;
  id!:number
  residence!:Residence
  constructor(private rs:ResidenceService,private route:Router) {
    // Initialisation du formulaire avec FormGroup et FormControl
    this.residenceForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', Validators.required),
      image: new FormControl('', [Validators.required]),
      status: new FormControl('', Validators.required)
    });
  }


  // Fonction appelée lors de la soumission du formulaire
  save() {
        this.rs.AddResidence(this.residenceForm.value).subscribe(
          ()=>this.route.navigateByUrl('/residence')
        )
      }



  }

