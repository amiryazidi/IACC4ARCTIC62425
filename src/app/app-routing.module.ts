import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { DetailResComponent } from './detail-res/detail-res.component';

const routes: Routes = [

  {path:'products' , component:HomeComponent},
  {path : '' , redirectTo : 'products' , pathMatch : 'full'},
  {path:'residence' , component:ResidenceComponent},
  {path:'AddRes' , component:FormResidenceComponent},
  {path:'detailRes/:id' , component:DetailResComponent},
  {path:'detailProd/:id' , component:DetailProdComponent},
  {path:'login' , component:LoginComponent},
  {path:'addProduct' , component:AddProductComponent},
  {path : '**' , component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
