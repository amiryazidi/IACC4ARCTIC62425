import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  username=  new FormControl ('amir',[Validators.required, Validators.minLength(3)])
  pwd=  new FormControl ('',Validators.required)


   loginForm = new FormGroup({
  username : new FormControl('',[Validators.required, Validators.minLength(3)]),
  pwd : new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]),
  cin : new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{8}$/)]),
  email: new FormControl('',[Validators.required, Validators.email]),
  tel: new FormControl('',[Validators.required]),

  })

  verifier(){
    console.log(this.username)
    console.log(this.pwd)
  }

}
