import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

type NewType = FormControl;

@Component({
  selector: 'app-sellerauth',
  templateUrl: './sellerauth.component.html',
  styleUrls: ['./sellerauth.component.css']
})
export class SellerauthComponent implements OnInit {

constructor(private data:ServiceService){}
  ngOnInit(): void {
  }


sellerdata:FormGroup=new FormGroup({
"name":new FormControl(),
"email":new FormControl(),
// "id":new FormControl(),
"password":new FormControl()

  
})

loginform:FormGroup=new FormGroup({
  "name":new FormControl(),
  "password":new FormControl(),
})



signUpFormView=false;

signuuptoggle(){
  this.signUpFormView=true;
}

logintoggle(){
  this.signUpFormView=false
}


signup():void{
  this.data.signUp(this.sellerdata.value)
}

SignIn(){
  this.data.login(this.loginform.value)
}


}
   