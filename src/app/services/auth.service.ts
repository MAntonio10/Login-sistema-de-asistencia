import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "https://localhost:7219/api/User/"
  constructor(private http : HttpClient) { }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj)
  }

  logint(logintObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,logintObj)
  }

  signup(signupObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,signupObj)
  }

  signupt(signuptObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,signuptObj)
  }

}