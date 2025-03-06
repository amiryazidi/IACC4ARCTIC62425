import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-detail-res',
  templateUrl: './detail-res.component.html',
  styleUrls: ['./detail-res.component.css']
})
export class DetailResComponent {

  id!:number
  residence!:Residence

  constructor(private act : ActivatedRoute, private rs:ResidenceService) { }


  ngOnInit(){
    //recupereation de l'id depuis l'url
    this.id= this.act.snapshot.params['id']
    this.rs.getResidenceById( this.id).subscribe(
      (data)=>this.residence=data

    )
  }
}
