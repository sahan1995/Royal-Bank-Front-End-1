import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SendmoneyService {

  private url_1 = "http://192.168.1.101:8080/api/v1/";
  private url_2 = "http://192.168.1.101:8082/api/v1/";
  private url_3 = "http://192.168.1.101:8083/api/v1/";
  constructor(private http:HttpClient) { }

  findAccByID(accno){
    return this.http.get(this.url_1+"/account/"+accno);
  }

  findAccByIDServer3(accno){
    return this.http.get(this.url_3+"/account/"+accno);
  }


  sendMoney(sendmoneyDTO){
    return this.http.post(this.url_2+"sendmoney",sendmoneyDTO)
  }

  sendMoneyserver3(sendmoneyDTO){
    return this.http.post(this.url_3+"sendmoney",sendmoneyDTO)
  }
}
