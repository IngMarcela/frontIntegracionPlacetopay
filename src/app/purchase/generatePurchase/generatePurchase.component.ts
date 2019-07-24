import { Component, OnInit, Input } from '@angular/core';
import { GLOBAL } from  '../../service/global';
import { DataService } from '../../service/data.service';
import { Purchase } from "../../models/purchase";
import { Product } from "../../models/product";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-generate-purchase',
  templateUrl: './generatePurchase.component.html',
  styleUrls: ['./generatePurchase.component.scss'],
  providers: [DataService]
})
export class GeneratePurchaseComponent implements OnInit {
  public purchase: Purchase;
  public product: Product;

  constructor(
    private _dataService: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.purchase = new Purchase(0, '', '', '', '', '',0 );
  }

  ngOnInit() {
    this._dataService.getProduct().subscribe(
      res => {
        this.product = res['data'];
        console.log(this.product);
      }, err => {
        console.log(<any>err);
      }
    );
  }

  onSubmit(){
    this._dataService.addPurchase(this.purchase).subscribe(
      response => {
        location.href = response['data']['url'];
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}



