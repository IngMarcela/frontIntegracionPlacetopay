import { Component, OnInit, Input, Inject } from '@angular/core';
import { GLOBAL } from  '../../service/global';
import { DataService } from '../../service/data.service';
import { Purchase } from "../../models/purchase";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailPurchaseComponent } from "../purchaseDetail/detailPurchase.component";
import Swal from 'sweetalert2';

export interface DialogData {
  reference: string
  id: number;
  name: string;
  email: string;
  mobil: string;
  address: string;
  description: string;
  product: string;
  price: number;
  status: string;
  total: number;
  processUrl: string;

}

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
  public animal: string;
  public data = [];

  constructor(
    public dialog: MatDialog,
    private _dataService: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'listado de ordenes';

  }

  openDialog(data): void {
    console.log(data);
    this.data = data;
    const dialogRef = this.dialog.open(DetailPurchaseComponent, {
      width: '40%',
      data: {id: data['id'],
        reference: data['reference'],
        name: data['customerName'],
        email: data['customerEmail'],
        mobile: data['customerMobile'],
        address: data['customerAddress'],
        description: data['description'],
        product: data['product']['name'],
        price: data['product']['price'],
        status: data['status'],
        total: data['total'],
        processUrl: data['processUrl']
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
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
            }
          )
        });

      }, err => {
        console.log(<any>err);
      }
    );

  }
}



