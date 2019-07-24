import {Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient, HttpHeaders, HttpEvent, HttpParams, HttpRequest} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Purchase} from "../models/purchase";

import {GLOBAL} from './global';

@Injectable()
export class DataService {
  public url: string;
  public dato: string;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getPurchase() {
    return this.http.get(this.url+'Purchase/listPurchase');
  }

  addPurchase(purchase: Purchase) {
    let httpParams = new HttpParams().append("json", JSON.stringify(purchase));
    //console.log(httpParams);
    return this.http.post(this.url + 'Purchase/generatePurchase', httpParams);
  }

  getProduct() {
    return this.http.get(this.url+'Product/listProduct');
  }

  getAproved(reference){
    let httpParams = new HttpParams().append("json", JSON.stringify({'reference': reference}));
    return this.http.post(this.url+'Purchase/statusPayment', httpParams);
  }

  /*getDetail(reference){
    let httpParams = new HttpParams().append("json", JSON.stringify({'reference': reference}));
    return this.http.post(this.url+'Purchase/statusPayment', httpParams);
  }*/
}
