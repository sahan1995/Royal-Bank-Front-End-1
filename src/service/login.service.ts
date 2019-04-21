import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http://192.168.1.101:8085/api/v1/";

  constructor(private http: HttpClient) { }


  login(loginDTO){

    return this.http.post(this.url+"users/login",loginDTO);
  }


}
