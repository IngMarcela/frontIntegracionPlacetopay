import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Purchase } from "../../models/purchase";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-purchase',
  templateUrl: './detailPurchase.component.html',
  styleUrls: ['./detailPurchase.component.scss'],
  providers: [DataService]
})
export class DetailPurchaseComponent implements OnInit {
  public titulo: string;
  public purchase: Purchase[];
  public parameter;
  public mensaje: string;
  public id: number;

  constructor(
    private _dataService: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'listado de ordenes';

  }

  ngOnInit() {
    this._route.params.forEach((params: Params)=>{
      this._dataService.getPurchase().subscribe(
        res => {
          console.log(res);
        })
    });

  }
}



