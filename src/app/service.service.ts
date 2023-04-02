import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  isSellerSignedIn=new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient, private route1:Router) { }

  baseUrl:any=`http://localhost:3000/seller`

  login(body:any){
    return this.http.get(`${this.baseUrl}?name=${body.name}&password=${body.password}`).subscribe((res:any)=>{
      console.log(res)
      if(res!=0){
        localStorage.setItem("sellersession",JSON.stringify(res))
        this.isSellerSignedIn.next(true)
        this.route1.navigate(['sellerhome'])
      }
    })
  }

  signUp(body:any){
    this.http.post(`${this.baseUrl}`,body).subscribe((res)=>{
      console.log(res);

      if(res){
        localStorage.setItem("sellersession",JSON.stringify(res))
        this.isSellerSignedIn.next(true);
        this.route1.navigate(['sellerhome'])
      }
    })
  }
  
}
