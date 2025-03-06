import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http: HttpClient) { }

  getResidences():Observable<Residence[]>{
    return this.http.get<Residence[]>('http://localhost:3000/residences')
  }

  getResidenceById(id:number):Observable<Residence>{
    return this.http.get<Residence>('http://localhost:3000/residences/'+id)
  }

  AddResidence(res:Residence):Observable<Residence>{
    return this.http.post<Residence>('http://localhost:3000/residences',res)
  }

  DeleteResidence(id:number):Observable<Residence>{
    return this.http.delete<Residence>('http://localhost:3000/residences/'+id)
  }

  updateResidence(res:Residence, id:number):Observable<Residence>{
    return this.http.put<Residence>('http://localhost:3000/residences/'+id,res)
  }



}
