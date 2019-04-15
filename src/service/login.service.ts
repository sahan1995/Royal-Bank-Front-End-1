import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private url_1="http://192.168.1.101:8080/api/v1/";
  private url_2="http://192.168.1.101:8082/api/v1/";
  private url_3="http://192.168.1.101:8083/api/v1/";

  constructor(private http: HttpClient) { }


  login(loginDTO){

    return this.http.post(this.url_2+"users/login",loginDTO);
  }

  loginserver3(loginDTO){

    return this.http.post(this.url_3+"users/login",loginDTO);
  }


}
