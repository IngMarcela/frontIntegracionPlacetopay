import { Component, OnInit, Input } from '@angular/core';
import { GLOBAL } from  '../../service/global';
import { DataService } from '../../service/data.service';
import { Purchase } from "../../models/purchase";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-purchase',
  templateUrl: './listPurchase.component.html',
  styleUrls: ['./listPurchase.component.scss'],
  providers: [DataService]
})
export class ListPurchaseComponent implements OnInit {
  public titulo: string;
  public purchase: Purchase[];
  public parameter;
  public mensaje: string;

  constructor(
    private _dataService: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'listado de ordenes';

  }

  ngOnInit() {
    this._dataService.getPurchase().subscribe(
      res => {
        this.purchase = res['data'];

        this._route.params.forEach((params: Params)=>{

          this._dataService.getAproved(params['reference']).subscribe(
            res => {
              this.mensaje = res['data'][0]['msg'];

              if(this.mensaje == 'PAYED'){
                Swal.fire(
                  'Good job!',
                  res['data'][0]['msg'],
                  'success'
                )
              }
              if(this.mensaje != 'PAYED'){
                Swal.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: res['data'][0]['msg']
                })
              }



              /*alert(res['data'][0]['msg']);*/
            }
          )
        });

      }, err => {
        console.log(<any>err);
      }
    );

  }
}



