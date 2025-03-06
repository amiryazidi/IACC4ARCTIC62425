import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailResComponent } from './detail-res/detail-res.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidenceComponent,
    NotFoundComponent,
    DetailProdComponent,
    LoginComponent,
    AddProductComponent,
    FormResidenceComponent,
    DetailResComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
